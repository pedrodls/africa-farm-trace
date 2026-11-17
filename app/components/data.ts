import { FieldPolygon, TimberLot } from "./types";

export const STORAGE_KEY = "africa-farm-trace-lots";

export const demoFields: FieldPolygon[] = [
  {
    name: "Kijani Hills field A", area: "12.4 ha", coordinates: "0.4192° S, 36.9518° E",
    parcels: [
      { id: "p1", label: "Parcel A1", color: "#b8d878", points: "55,45 190,25 225,105 145,135 45,110" },
      { id: "p2", label: "Parcel A2", color: "#8fbe76", points: "225,105 310,55 385,100 355,185 270,170 145,135" },
      { id: "p3", label: "Parcel A3", color: "#d7d878", points: "45,110 145,135 270,170 235,245 100,230 30,175" },
      { id: "p4", label: "Parcel A4", color: "#9bc8a1", points: "270,170 355,185 410,240 320,285 235,245" },
    ],
  },
  {
    name: "Kijani Hills field B", area: "8.7 ha", coordinates: "0.4228° S, 36.9581° E",
    parcels: [
      { id: "p1", label: "Parcel B1", color: "#a9cf78", points: "70,55 215,35 270,115 175,155 55,125" },
      { id: "p2", label: "Parcel B2", color: "#cfd978", points: "270,115 370,75 405,165 330,235 175,155" },
      { id: "p3", label: "Parcel B3", color: "#8fbe76", points: "55,125 175,155 330,235 225,275 75,235" },
    ],
  },
];

export const demoLot: TimberLot = {
  code: "AF-KE-2026-001", product: "Sustainably harvested timber",
  species: "East African cedar", producer: "Kijani Hills Cooperative",
  origin: "Nyeri County, Kenya", quantity: "48.5 m³", harvestDate: "12 May 2026",
  evidence: ["Producer identity confirmed", "Origin coordinates registered", "Chain-of-custody events complete"],
  events: [
    { date: "12 May 2026", title: "Harvest registered", detail: "Selective harvest recorded at the producer plot.", actor: "Kijani Hills Cooperative", status: "complete" },
    { date: "18 May 2026", title: "Lot aggregated", detail: "48.5 m³ grouped and assigned a traceability code.", actor: "Kijani Hills Cooperative", status: "complete" },
    { date: "26 May 2026", title: "Certified processing", detail: "Sawn and graded at a registered processing facility.", actor: "GreenMill Processing Ltd.", status: "complete" },
    { date: "02 Jun 2026", title: "Export review", detail: "Evidence package prepared for buyer due diligence.", actor: "Africa Farm Trace", status: "current" },
  ],
  fields: demoFields,
};

export function createInitialField(producer: string): FieldPolygon {
  return { name: `${producer} field`, area: "1.0 ha", coordinates: "Origin coordinates pending", parcels: [{ id: "p1", label: "Registered parcel", color: "#b8d878", points: "55,45 190,25 225,105 145,135 45,110" }] };
}
