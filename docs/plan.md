# Africa Farm Trace — MVP implementation plan

## Summary

Evolve the current deterministic traceability demo into a credible hackathon
MVP without adding a backend. Producers will be able to register timber lots
in the browser, receive a verification code, and see the lot immediately in
the public verification flow. A compact dashboard will make the value visible
through lot count, volume, and evidence coverage.

The browser's `localStorage` is the deliberate persistence boundary for this
iteration. The seeded demo lot remains available so the presentation can
always start from a known state.

## Technical context

- Next.js App Router with a client-side `app/page.tsx` flow.
- TypeScript domain types remain local to the page until a second screen or
  API requires extraction.
- CSS is hand-authored in `app/globals.css` and should preserve the current
  visual language.
- No package or infrastructure changes are required.
- Local storage is accessed only after mount to avoid server/client rendering
  mismatches.
- User-entered values are validated before creating a lot; generated codes are
  deterministic enough for a live demo and unique within the browser.

## Constitution check

- **Demo-first scope:** no authentication, blockchain, external integrations,
  legal EUDR decisions, or production database.
- **Evidence honesty:** UI labels local evidence as demo evidence and never
  presents it as regulatory certification.
- **Traceability:** each registered lot has an immutable-in-session code and a
  chronological event history.
- **Accessibility:** forms have labels, feedback uses live regions, and the
  interface remains usable on narrow screens.

## Applied guidelines

- Use native React form state and explicit TypeScript types.
- Keep client-only APIs behind `useEffect` and guarded browser access.
- Prefer existing CSS patterns and small focused components/sections over a
  new UI dependency.
- Validate the smallest relevant commands: `pnpm lint` and `pnpm build`.

## Requirements

- **REQ-001:** A producer can create a timber lot with required profile data.
- **REQ-002:** The system generates and displays a shareable verification code.
- **REQ-003:** A valid code reveals the lot profile, evidence, and timeline.
- **REQ-004:** An invalid code has an explicit, non-fabricated error state.
- **REQ-005:** Registered lots persist across page reloads in the same browser.
- **REQ-006:** The dashboard summarizes registered lots, volume, and evidence.
- **REQ-007:** The responsive UI preserves readable forms, feedback, and trace
  details.
- **REQ-008:** Documentation and UI distinguish demo evidence from legal
  certification.
- **REQ-009:** The lot view visualizes field and parcel polygons in separate
  colors.

## Implementation steps

### Phase 1 — [Cross-cutting] Domain and persistence foundation

#### P1.1 — [Cross-cutting] Expand the lot model and local storage boundary

Add reusable lot types, seeded data, serialization helpers, code generation,
and browser hydration state. Preserve the existing `AF-KE-2026-001` demo code.
Maps to REQ-002, REQ-003, REQ-005, REQ-008.

### Phase 2 — [Cross-cutting] Producer registration

#### P2.1 — [Cross-cutting] Add a producer lot registration flow

Add a producer mode with a validated form for producer, origin, species,
quantity, and harvest date. On success, create a lot with initial harvest and
registration events, persist it, select it, and display its new code.
Maps to REQ-001, REQ-002, REQ-005, REQ-007.

### Phase 3 — [Cross-cutting] Verification and dashboard

#### P3.1 — [Cross-cutting] Connect verification to all persisted lots

Replace the single hard-coded lookup with a normalized search across seeded
and registered lots. Keep the explicit not-found state and render the complete
profile/timeline for any match.
Maps to REQ-003, REQ-004, REQ-008.

#### P3.2 — [Cross-cutting] Add session dashboard metrics

Show lot count, total volume, and evidence coverage, plus a small recent-lots
list that lets the presenter select a code for verification.
Maps to REQ-005, REQ-006, REQ-007.

### Phase 4 — [Cross-cutting] UX polish and verification

#### P4.1 — [Cross-cutting] Make states and responsive layout presentation-ready

Add clear empty/loading/success states, keyboard-friendly controls, copy
feedback, and responsive styles for registration, dashboard, and trace views.
Keep the evidence disclaimer visible.
Maps to REQ-004, REQ-007, REQ-008.

#### P4.2 — [Cross-cutting] Run quality checks and update demo documentation

Update the feature specification and demo script for registration and
dashboard behavior. Run lint and production build.
Maps to REQ-001 through REQ-008.

#### P4.3 — [Cross-cutting] Add EUDR field and parcel map visualization

Render the field boundary and each component parcel as SVG polygons with
distinct colors, coordinates, a legend, and an explicit illustrative-data
disclaimer. Use Lato consistently across the product shell.
Maps to REQ-007, REQ-008, REQ-009.

## Project structure

```text
app/
  globals.css       # responsive visual system and new dashboard/form states
  layout.tsx        # metadata and document shell
  page.tsx          # client-side producer, dashboard, and verification flow
docs/
  feature-inventory.md
  features/timber-lot-traceability.md
  plan.md
```

## Tasks

### Phase 1 — Foundation

- [ ] T001 [Plan:P1.1] Define `TraceEvent` and `TimberLot` persistence fields in `app/page.tsx`, including stable code and evidence status.
- [ ] T002 [P] [Plan:P1.1] Add localStorage load/save helpers in `app/page.tsx` with browser guards and seeded demo fallback.
- [ ] T003 [Plan:P1.1] Add code normalization and unique verification-code generation in `app/page.tsx`.

### Phase 2 — Producer story

- [ ] T004 [Plan:P2.1] Add producer registration state and a labeled form in `app/page.tsx`.
- [ ] T005 [Plan:P2.1] Validate required producer, origin, species, quantity, and harvest date fields in `app/page.tsx`.
- [ ] T006 [Plan:P2.1] Persist newly created lots and show their generated verification code in `app/page.tsx`.

### Phase 3 — Verification and dashboard

- [ ] T007 [Plan:P3.1] Search all persisted lots by normalized verification code in `app/page.tsx`.
- [ ] T008 [P] [Plan:P3.2] Calculate lot count, total quantity, evidence coverage, and recent lots in `app/page.tsx`.
- [ ] T009 [Plan:P3.2] Add dashboard metric cards and recent-lot quick actions in `app/page.tsx`.

### Phase 4 — Polish and verification

- [ ] T010 [Plan:P4.1] Add navigation between producer, dashboard, and public verification modes in `app/page.tsx`.
- [ ] T011 [P] [Plan:P4.1] Style new forms, metrics, and responsive states in `app/globals.css`.
- [ ] T012 [P] [Plan:P4.2] Update `docs/features/timber-lot-traceability.md` with the expanded MVP flow and acceptance criteria.
- [ ] T013 [Plan:P4.2] Run `pnpm lint` and `pnpm build` from the repository root.
- [ ] T014 [Plan:P4.3] Add typed field and parcel polygon data and an SVG map renderer in `app/page.tsx`.
- [ ] T015 [P] [Plan:P4.3] Add map, polygon legend, and Lato typography styles in `app/globals.css` and `app/layout.tsx`.
- [ ] T016 [Plan:P4.3] Update `docs/features/timber-lot-traceability.md` with field polygon acceptance criteria.

## Requirement Mapping

| REQ ID | Description | Plan Items | Implementation Evidence |
| --- | --- | --- | --- |
| REQ-001 | Producer creates a timber lot | P2.1 | Registration form and validation in `app/page.tsx` |
| REQ-002 | System generates a code | P1.1, P2.1 | Code generator and success result in `app/page.tsx` |
| REQ-003 | Valid code reveals full trace | P1.1, P3.1 | Lot lookup and trace renderer in `app/page.tsx` |
| REQ-004 | Invalid code is explicit | P3.1, P4.1 | Not-found state in `app/page.tsx` |
| REQ-005 | Lots persist locally | P1.1, P2.1, P3.2 | `localStorage` helpers and dashboard list |
| REQ-006 | Dashboard summarizes data | P3.2 | Metric cards and recent lots |
| REQ-007 | Responsive accessible UX | P2.1, P3.2, P4.1 | Labels, live regions, responsive CSS |
| REQ-008 | Evidence disclaimer is explicit | P1.1, P3.1, P4.1 | Evidence panel and documentation disclaimer |
| REQ-009 | Field and parcel polygons are visualized | P4.3 | SVG map, colored parcels, legend, and coordinates |
