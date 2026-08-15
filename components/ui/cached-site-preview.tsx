"use client";

import { useEffect, useRef, useState } from "react";
import { fetchAndCachePreview, getCachedPreview, hasPreviewFlag } from "@/lib/preview-cache";

type CachedSitePreviewProps = {
  src: string;
  title: string;
  liveUntilCached?: boolean;
  delayMs?: number;
};

export function CachedSitePreview({
  src,
  title,
  liveUntilCached = false,
  delayMs = 0,
}: CachedSitePreviewProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const objectUrlRef = useRef<string | null>(null);
  const [inView, setInView] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showLive, setShowLive] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        io.disconnect();
      },
      { rootMargin: "160px", threshold: 0.01 }
    );

    io.observe(host);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let delayTimer: number | undefined;

    const applyBlob = (blob: Blob) => {
      if (cancelled) return;
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      const next = URL.createObjectURL(blob);
      objectUrlRef.current = next;
      setImageUrl(next);
      setShowLive(false);
    };

    getCachedPreview(src)
      .then((blob) => {
        if (blob) applyBlob(blob);
      })
      .catch(() => undefined);

    if (!inView) {
      return () => {
        cancelled = true;
      };
    }

    if (liveUntilCached && !hasPreviewFlag(src)) {
      delayTimer = window.setTimeout(() => {
        if (!cancelled) setShowLive(true);
      }, delayMs);
    }

    fetchAndCachePreview(src)
      .then((blob) => {
        if (blob) applyBlob(blob);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      if (delayTimer) window.clearTimeout(delayTimer);
    };
  }, [src, inView, liveUntilCached, delayMs]);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0 h-full w-full overflow-hidden">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : showLive ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white"
        />
      ) : (
        <div
          className="absolute inset-0 animate-pulse bg-[#E8E2D9] dark:bg-[#1F1F23]"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
