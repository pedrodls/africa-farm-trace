import { demoFields, demoLot, STORAGE_KEY } from "./data";
import { TimberLot } from "./types";

export function loadLots(): TimberLot[] {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return [demoLot];
  try {
    const parsed = JSON.parse(stored) as Partial<TimberLot>[];
    return Array.isArray(parsed) && parsed.length
      ? parsed.map((lot) => ({ ...lot, fields: lot.fields ?? demoFields }) as TimberLot)
      : [demoLot];
  } catch {
    console.warn("Stored lots could not be loaded; using the demo lot.");
    return [demoLot];
  }
}

export function saveLots(lots: TimberLot[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lots));
}
