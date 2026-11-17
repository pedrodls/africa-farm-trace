# Africa Farm Trace

Africa Farm Trace is an MVP for transparent timber traceability from African
producers to responsible markets. It demonstrates how a verification code can
connect a timber lot to its producer, origin, chain-of-custody events, field
polygons, and parcel-level geolocation evidence.

## MVP capabilities

- Public timber-lot verification by code.
- Producer lot registration with locally generated codes.
- Browser persistence using `localStorage`.
- Dashboard with registered lots, tracked volume, and evidence coverage.
- Field and parcel polygon visualization with separate colors.
- Responsive interface using the Lato typeface.
- Explicit distinction between demo evidence and legal EUDR certification.

The map geometry and evidence are illustrative demo data. Production
deployment would validate geolocation, certification, and due-diligence
documents through authoritative systems and approved partners.

## Demo flow

1. Start the application.
2. Select **Verify** and enter `AF-KE-2026-001`.
3. Review the lot profile, custody timeline, field boundaries, and colored
   parcels.
4. Select **Register lot** to create a producer lot in the browser.
5. Select **Dashboard** to review registered volume and recent lots.

## Getting started

This project uses Next.js, React, TypeScript, and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Validation

Run the production checks before presenting:

```bash
pnpm lint
pnpm build
```

## Project structure

The page is intentionally composed from focused components. Each TypeScript
source file under `app/` and `app/components/` is kept below 100 lines:

```text
app/
  components/
    BrandNav.tsx          # Primary navigation
    DashboardView.tsx     # Portfolio metrics and recent lots
    FieldMap.tsx          # Field and parcel SVG polygons
    ProducerView.tsx      # Producer registration form
    TraceView.tsx         # Lot profile and custody timeline
    VerificationView.tsx  # Public lookup experience
    data.ts               # Seed data and polygon fixtures
    storage.ts            # Browser persistence boundary
    types.ts              # Shared domain types
    useTraceability.ts    # State and business actions
  globals.css             # Shared responsive visual system
  layout.tsx              # Metadata and Lato font setup
  page.tsx                # Composition only
```

## Scope and next steps

This is a hackathon MVP. Authentication, a production database, authoritative
EUDR checks, laboratory integrations, customs workflows, and external GIS
validation are intentionally outside the current scope.
