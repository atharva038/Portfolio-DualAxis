"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { CachedSitePreview } from "@/components/ui/cached-site-preview";

export interface CardItem {
  imgUrl?: string;
  alt?: string;
  linkUrl?: string;
}

interface SocialCardsProps {
  cards: CardItem[];
}

const MAX_VISIBLE = 7;

const FAN_POSITIONS = [
  { rot: -14, scale: 0.84, x: -10, y: 3.2, zIndex: 1 },
  { rot: -9,  scale: 0.90, x: -6.5, y: 1.8, zIndex: 2 },
  { rot: -4,  scale: 0.96, x: -3.2, y: 0.6, zIndex: 3 },
  { rot: 0,   scale: 1.0,  x: 0,    y: 0,   zIndex: 10 },
  { rot: 4,   scale: 0.96, x: 3.2,  y: 0.6, zIndex: 3 },
  { rot: 9,   scale: 0.90, x: 6.5,  y: 1.8, zIndex: 2 },
  { rot: 14,  scale: 0.84, x: 10,   y: 3.2, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 22 * 16;
  else if (width < 640) idealPx = 26 * 16;
  else if (width < 768) idealPx = 28 * 16;
  else if (width < 1024) idealPx = 34 * 16;
  else idealPx = 38 * 16;

  const available = window.innerHeight * 0.7;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(slotCount: number, slot: number) {
  if (slotCount >= MAX_VISIBLE) return FAN_POSITIONS[slot];

  const center = slotCount === 2 ? 1 : (slotCount >> 1);
  const spread = Math.max(center, 1);
  const distance = slotCount > 1 ? (slot - center) / spread : 0;
  const absDistance = Math.abs(distance);

  return {
    rot: distance * 12,
    scale: 1 - 0.12 * absDistance * absDistance,
    x: distance * 8,
    y: absDistance * absDistance * 2,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-[16px] text-black/40 dark:text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-black/25 dark:hover:border-white/25 hover:text-black/70 dark:hover:text-white/80 active:opacity-70 transition-colors duration-300 before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:border before:border-black/[0.04] dark:before:border-white/[0.04] before:pointer-events-none";

export default function SocialCards({ cards }: SocialCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = cards.length;
  const visibleCount = Math.min(MAX_VISIBLE, totalCards);
  const half = visibleCount === 2 ? 1 : (visibleCount >> 1);
  const canCycle = totalCards > 1;
  const [centerIndex, setCenterIndex] = useState(0);

  const getVisibleMap = useCallback((center: number) => {
    const map = new Map<number, number>();
    for (let slot = 0; slot < visibleCount; slot++) {
      map.set(((center + slot - half) % totalCards + totalCards) % totalCards, slot);
    }
    return map;
  }, [totalCards, visibleCount, half]);

  const cycle = useCallback((direction: "left" | "right") => {
    if (isAnimating.current || !canCycle) return;
    isAnimating.current = true;
    directionRef.current = direction;
    setCenterIndex((prev) =>
      direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
    );
  }, [totalCards, canCycle]);

  const bringToFront = useCallback((index: number) => {
    if (index === centerIndex || isAnimating.current || !canCycle) return;
    isAnimating.current = true;
    const forward = (index - centerIndex + totalCards) % totalCards;
    const backward = (centerIndex - index + totalCards) % totalCards;
    directionRef.current = forward <= backward ? "right" : "left";
    setCenterIndex(index);
  }, [centerIndex, totalCards, canCycle]);

  const handleCardClick = useCallback((index: number, linkUrl?: string) => {
    if (index !== centerIndex) {
      bringToFront(index);
      return;
    }
    if (linkUrl) {
      window.open(linkUrl, linkUrl.startsWith("http") ? "_blank" : "_self", "noopener,noreferrer");
    }
  }, [centerIndex, bringToFront]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const slotCount = visibleCount;
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const animationCount = visibleMap.size;
    const hangGuard = window.setTimeout(() => {
      isAnimating.current = false;
      if (isFirstMount) hasEntered.current = true;
    }, 700);

    const onCardDone = () => {
      if (++completedCount >= animationCount) {
        window.clearTimeout(hangGuard);
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      gsap.killTweensOf(card);
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        };

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: `${6 * hMult}rem`, rotation: 0, scale: 0.92, opacity: 0 });
          gsap.to(card, { ...target, duration: 0.45, ease: "power2.out", delay: slot * 0.05, onComplete: onCardDone });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 8 : -8;
          gsap.set(card, { x: `${enterX}rem`, y: `${y * hMult}rem`, rotation: direction === "right" ? 10 : -10, scale: 0.92, opacity: 0 });
          gsap.to(card, { ...target, duration: 0.35, ease: "power2.out", onComplete: onCardDone });
        } else {
          gsap.to(card, { ...target, duration: 0.35, ease: "power2.out", onComplete: onCardDone });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -8 : 8;
        gsap.to(card, { x: `${exitX}rem`, opacity: 0, rotation: direction === "right" ? -10 : 10, duration: 0.28, ease: "power2.in", zIndex: 0 });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        const targetRot = base.rot;
        const targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;

          if (slot === hoveredSlot) {
            targetY -= 0.8 * hM;
          } else {
            const pushStrength = 1.2;

            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult;
            } else {
              targetX += pushStrength * mult;
            }
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, {
          x: `${targetX}rem`, y: `${targetY}rem`, rotation: targetRot, scale: targetScale,
          duration: 0.28, delay, ease: "power2.out", overwrite: "auto",
        });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
        if (activeSlot !== slot) { activeSlot = slot; updateHoverLayout(slot); }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => { activeSlot = null; updateHoverLayout(null); }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => { if (!isAnimating.current) updateHoverLayout(activeSlot); };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(hangGuard);
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
      cardElements.forEach((card) => gsap.killTweensOf(card));
    };
  }, [centerIndex, totalCards, getVisibleMap, visibleCount]);

  if (!totalCards) return null;

  const chevron = (direction: "left" | "right") => (
    <svg className="relative z-[2] w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );

  return (
    <section className="flex flex-col items-center w-full py-2 lg:py-4 px-4 md:px-8 relative z-20">
      <div className="flex items-center justify-center w-full max-w-[90rem]">
        <div ref={containerRef} className="fan-layout flex relative justify-center items-center w-full max-w-[80rem]">
          {cards.map((card, index) => {
            const isFront = index === centerIndex;
            const preview = (
              <div className="fan-card-preview">
                {card.linkUrl ? (
                  <CachedSitePreview
                    src={card.linkUrl}
                    title={card.alt || `Project ${index + 1}`}
                    liveUntilCached={isFront}
                  />
                ) : card.imgUrl ? (
                  <img
                    src={card.imgUrl}
                    loading="lazy"
                    alt={card.alt || `Card ${index}`}
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#E8E2D9] dark:bg-[#1F1F23]" />
                )}
                {card.alt && (
                  <span className="fan-card-label">{card.alt}</span>
                )}
              </div>
            );
            return (
              <button
                key={index}
                type="button"
                className="fan-card block cursor-pointer p-0 text-left"
                onClick={() => handleCardClick(index, card.linkUrl)}
                aria-label={
                  isFront
                    ? `Open ${card.alt || `project ${index + 1}`}`
                    : `Show ${card.alt || `project ${index + 1}`}`
                }
              >
                {preview}
              </button>
            );
          })}
        </div>
      </div>

      {canCycle && (
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 z-30">
          <button type="button" className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("left")} aria-label="Previous">
            {chevron("left")}
          </button>
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to project ${i + 1}`}
                onClick={() => bringToFront(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === centerIndex ? "w-6 bg-[#C07A3D] dark:bg-[#C6A75E]" : "w-2 bg-black/15 dark:bg-white/15"}`}
              />
            ))}
          </div>
          <button type="button" className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("right")} aria-label="Next">
            {chevron("right")}
          </button>
        </div>
      )}
    </section>
  );
}
