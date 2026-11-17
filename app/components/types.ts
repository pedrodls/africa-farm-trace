export type TraceEvent = {
  date: string;
  title: string;
  detail: string;
  actor: string;
  status: "complete" | "current";
};

export type Parcel = {
  id: string;
  label: string;
  color: string;
  points: string;
};

export type FieldPolygon = {
  name: string;
  area: string;
  coordinates: string;
  parcels: Parcel[];
};

export type TimberLot = {
  code: string;
  product: string;
  species: string;
  producer: string;
  origin: string;
  quantity: string;
  harvestDate: string;
  evidence: string[];
  events: TraceEvent[];
  fields: FieldPolygon[];
};

export type View = "verify" | "producer" | "dashboard";
