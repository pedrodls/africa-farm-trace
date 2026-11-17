# Africa Farm Trace — Feature inventory

## Product direction

Africa Farm Trace is a traceability layer for agricultural products moving
from African producers to certified processors, laboratories, exporters, and
buyers. The MVP focuses on timber because the demo can show a concrete
origin-to-product story and the cost of opaque supply chains is especially
visible through illegal logging, weak market access, and export barriers.

## Primary demo persona

The producer is the starting persona. They need a simple way to register a
lot and give a buyer or auditor a trustworthy verification reference without
having to explain the entire supply chain manually.

## Feature inventory

| Priority | Feature | User value | MVP decision |
| --- | --- | --- | --- |
| P0 | Timber lot traceability lookup | Makes origin and chain history understandable from one code | In scope |
| P0 | Producer lot registration | Gives the demo a credible starting event | Represented by the demo lot context |
| P1 | Chain-of-custody events | Shows transformations and custody handoffs | Mocked as a timeline |
| P1 | Public verification view | Lets buyers and auditors verify without an account | In scope as the main view |
| P1 | Compliance evidence summary | Highlights evidence gaps before export | In scope as status, not legal certification |
| P2 | Role-based workflows | Supports processors, labs, exporters, and regulators | Future |
| P2 | Export/import controls | Records customs and supporting documents | Future |
| P2 | Analytics dashboard | Shows portfolio-level volume and risk | Future |

## Chosen MVP feature

**Timber Lot Traceability & Verification**. A user enters a verification code
and receives a clear profile containing:

- producer and origin;
- species, quantity, and harvest date;
- a chronological chain-of-custody timeline;
- evidence/compliance signals;
- a clear distinction between verified and unknown codes.

## Explicit non-goals

The demo does not issue a government certificate, make a binding EUDR legal
determination, verify GPS coordinates against satellite imagery, authenticate
users, store data in a production database, or integrate with customs,
laboratories, or certification bodies.

## Demo success criteria

1. A presenter can explain the value in under one minute.
2. A valid code reveals a complete, readable timber trace.
3. An invalid code produces a helpful recovery state.
4. The interface makes mocked evidence and future integrations clear.
