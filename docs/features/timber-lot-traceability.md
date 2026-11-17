# Feature specification: Timber Lot Traceability & Verification

## Summary

Provide a deterministic, public-facing lookup for a timber lot. A producer
shares a short verification code; a buyer, auditor, or consumer uses it to
inspect the lot's origin and the events that transformed it into the product
they are evaluating.

## User stories

- As a **producer**, I want a verification code for my timber lot so I can
  share evidence of origin with a buyer.
- As a **buyer or auditor**, I want to enter a code and see the complete
  timeline so I can decide whether the lot is traceable.
- As a **visitor**, I want an understandable result for an invalid code so I
  know whether I mistyped it or the lot is not available.

## Data contract

```ts
type TraceEvent = {
  date: string;
  title: string;
  detail: string;
  actor: string;
  status: "complete" | "current";
};

type TimberLot = {
  code: string;
  product: string;
  species: string;
  producer: string;
  origin: string;
  quantity: string;
  harvestDate: string;
  status: "Verified trace";
  evidence: string[];
  events: TraceEvent[];
};
```

## Functional requirements

- **REQ-001:** A producer can create a timber lot with required profile data.
- **REQ-002:** The system generates and displays a shareable verification code.
- **REQ-003:** A valid code displays the matching lot profile and timeline.
- **REQ-004:** An invalid code displays an explicit not-found state without
  fabricated results.
- **REQ-005:** Registered lots persist across reloads in the same browser.
- **REQ-006:** A dashboard summarizes registered lots, volume, and evidence.
- **REQ-007:** The responsive interface preserves readable forms and trace
  details.
- **REQ-008:** Mocked evidence is clearly distinguished from legal
  certification.
- **REQ-009:** The lot view visualizes the field boundary and its component
  parcels as distinct colored polygons.

1. The user can submit a verification code from the public verification view.
2. Codes are normalized for case and surrounding whitespace.
3. A producer can register a lot with producer, origin, species, quantity, and
   harvest date.
4. A registered lot receives a unique verification code and initial timeline.
5. A valid code displays the matching lot profile and timeline.
6. An invalid code displays an explicit not-found state without fabricated
   results.
7. The dashboard summarizes lot count, volume, evidence, and recent lots.
8. The demo provides a visible example code so the presenter can recover
   quickly during a live presentation.
9. Copying a code gives feedback without leaving the page.
10. The lot profile shows field coordinates, a field polygon, parcel polygons,
    and a legend with a distinct color for each parcel.

## Non-functional requirements

- Responsive layout for desktop presentation and narrow screens.
- Strong visual hierarchy and accessible labels.
- No claim that mocked evidence is a regulatory certification.
- No network request or backend dependency for the MVP; browser local storage
  is acceptable for demo persistence.
- Polygon geometry is illustrative mock data in the MVP and must not be
  presented as authoritative geospatial validation.

## Acceptance criteria

- Given `AF-KE-2026-001`, submitting the form shows the verified timber lot.
- Given an unknown code, submitting the form shows “No trace found” and keeps
  the user on the lookup page.
- Given valid producer details, submitting the registration form creates a new
  lot and displays its verification code.
- After a reload, a locally registered lot remains available for lookup.
- The dashboard displays the seeded lot and any locally registered lots.
- The lot view displays a geolocation map with a boundary polygon and
  separately colored component parcels.
- The result contains at least four trace events and at least three evidence
  signals.
- The example code is available through a single click.
- `pnpm lint` and `pnpm build` complete successfully.

## Demo script

1. Introduce the producer problem: a good product can still be discounted or
   blocked when its origin cannot be proven.
2. Enter `AF-KE-2026-001`.
3. Point out the producer, location, species, and quantity.
4. Walk through harvest, aggregation, certified processing, and export review.
5. Explain that the evidence panel is an MVP representation and the next
   phase would connect labs, certifiers, and customs systems.
