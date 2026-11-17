import { FormEvent, useEffect, useMemo, useState } from "react";
import { createInitialField, demoLot } from "./data";
import { loadLots, saveLots } from "./storage";
import { TimberLot, View } from "./types";

export function normalizeCode(value: string) { return value.trim().toUpperCase(); }
export function formatDate(value: string) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
function nextCode(lots: TimberLot[]) {
  const max = lots.reduce((high, lot) => Math.max(high, Number(lot.code.match(/-(\d+)$/)?.[1] || 0)), 0);
  return `AF-KE-2026-${String(max + 1).padStart(3, "0")}`;
}

export function useTraceability() {
  const [view, setView] = useState<View>("verify");
  const [lots, setLots] = useState<TimberLot[]>([demoLot]);
  const [hydrated, setHydrated] = useState(false);
  const [code, setCode] = useState("");
  const [searchedCode, setSearchedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [createdCode, setCreatedCode] = useState("");

  useEffect(() => { window.queueMicrotask(() => { setLots(loadLots()); setHydrated(true); }); }, []);
  useEffect(() => { if (hydrated) saveLots(lots); }, [hydrated, lots]);

  const matchedLot = useMemo(() => lots.find((lot) => lot.code === normalizeCode(searchedCode)), [lots, searchedCode]);
  const totalVolume = lots.reduce((total, lot) => total + (Number.parseFloat(lot.quantity) || 0), 0);
  const evidenceCoverage = Math.round(lots.filter((lot) => lot.evidence.length >= 3).length / lots.length * 100);

  function verify(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSearchedCode(normalizeCode(code)); setView("verify"); }
  function selectLot(lotCode: string) { setCode(lotCode); setSearchedCode(lotCode); setView("verify"); }
  async function copyCode(lotCode: string) { await navigator.clipboard.writeText(lotCode); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
  function register(form: FormData) {
    const producer = String(form.get("producer") || "").trim(), origin = String(form.get("origin") || "").trim();
    const species = String(form.get("species") || "").trim(), quantity = String(form.get("quantity") || "").trim();
    const harvestDate = String(form.get("harvestDate") || "");
    if (!producer || !origin || !species || !quantity || !harvestDate) return;
    const code = nextCode(lots), date = formatDate(harvestDate);
    const lot: TimberLot = { code, product: "Sustainably harvested timber", species, producer, origin, quantity: `${quantity} m³`, harvestDate: date, evidence: ["Producer declaration recorded"], fields: [createInitialField(producer)], events: [
      { date, title: "Harvest registered", detail: "Initial lot record created by the producer.", actor: producer, status: "current" },
      { date: formatDate(new Date().toISOString().slice(0, 10)), title: "Traceability code assigned", detail: "Lot is ready for chain-of-custody events.", actor: "Africa Farm Trace", status: "complete" },
    ] };
    setLots((current) => [...current, lot]); setCreatedCode(code);
  }
  return { view, setView, lots, code, setCode, searchedCode, matchedLot, copied, createdCode, totalVolume, evidenceCoverage, verify, selectLot, copyCode, register };
}
