const DB_NAME = "dual-axis-previews";
const STORE = "shots";
const DB_VERSION = 1;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE)) {
        request.result.createObjectStore(STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getCachedPreview(url: string): Promise<Blob | null> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const request = tx.objectStore(STORE).get(url);
    request.onsuccess = () => resolve((request.result as Blob | undefined) ?? null);
    request.onerror = () => reject(request.error);
  });
}

export async function setCachedPreview(url: string, blob: Blob): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(blob, url);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function fetchAndCachePreview(url: string): Promise<Blob | null> {
  const cached = await getCachedPreview(url);
  if (cached) return cached;

  const res = await fetch(`/api/site-preview?url=${encodeURIComponent(url)}`);
  if (!res.ok) return null;

  const blob = await res.blob();
  if (!blob.type.startsWith("image") || blob.size < 4000) return null;

  await setCachedPreview(url, blob);
  try {
    localStorage.setItem(`da-preview:${url}`, "1");
  } catch {
    /* quota */
  }
  return blob;
}

export function hasPreviewFlag(url: string): boolean {
  try {
    return localStorage.getItem(`da-preview:${url}`) === "1";
  } catch {
    return false;
  }
}
