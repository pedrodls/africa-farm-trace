# Africa Farm Trace 🌍🌱

**Making African agricultural products traceable, verifiable, and ready for responsible global markets.**

Africa Farm Trace is a digital traceability platform designed to connect African producers to responsible markets through transparent product origin records and supply chain verification.

The project addresses a critical challenge across African agricultural and forestry value chains: the difficulty of proving where products come from, how they were produced, and whether they followed responsible production and processing practices.

Our vision is to build a digital trust infrastructure that connects producers, processors, laboratories, certification bodies, exporters, and buyers.

**Hackathon MVP: Timber Lot Traceability & Verification.**

---

## 🌍 The Problem

Across many African countries, agricultural and forestry producers face significant challenges in managing production, logistics, processing, and international trade.

Products such as coffee and timber have considerable economic potential, but limited traceability and fragmented supply chains make it difficult to:

- Prove the origin and authenticity of products.
- Track products through harvesting, processing, and distribution.
- Demonstrate compliance with international market requirements.
- Prevent illegal logging and the commercialization of products from unauthorized sources.
- Give producers better access to international markets and fair commercial opportunities.

For timber in particular, the inability to establish reliable origin and supply chain records can contribute to illegal exploitation of forests, environmental damage, and barriers to international trade.

The result is lost economic opportunities for producers, governments, and African economies.

## 💡 Our Solution

Africa Farm Trace introduces a digital verification system that gives every registered product lot a traceability identity.

Using a unique verification code, buyers, auditors, and other stakeholders can access a product's traceability information, including:

- Producer and geographical origin.
- Product characteristics and quantity.
- Harvest or production information.
- Chain-of-custody history.
- Processing and transformation events.
- Geographical field and parcel information.
- Supporting evidence and compliance indicators.

Our objective is to make product origin and supply chain information easier to access, understand, and verify.

### Why Africa Farm Trace?

**From origin to opportunity.**

We want African producers to demonstrate the value, origin, and responsibility behind their products, helping build trust with international buyers and responsible markets.

---

## 🚀 Current MVP — Timber Traceability

The first implementation focuses on timber because it provides a concrete use case for demonstrating product origin, forestry traceability, and responsible supply chains.

### Implemented Features

| Feature | Description |
|---|---|
| Public Verification | Search timber lots using a unique verification code. |
| Producer Registration | Register a timber lot with producer, origin, species, quantity, and harvest date. |
| Traceability Timeline | Visualize harvesting, aggregation, processing, and export review events. |
| Field Visualization | Display field boundaries and individual parcel polygons. |
| Evidence Overview | Present available traceability and compliance evidence. |
| Dashboard | View registered lots, tracked volume, and evidence coverage. |
| Local Persistence | Preserve registered lots using browser local storage. |
| Responsive Interface | Access the platform through desktop and mobile-sized screens. |

### Demo Verification Code

Use the following code to explore the demonstration:

`AF-KE-2026-001`

The demo displays a timber lot associated with:

- Producer: Kijani Hills Cooperative
- Origin: Nyeri County, Kenya
- Species: East African cedar
- Quantity: 48.5 m³

You can explore its origin information, field visualization, evidence indicators, and chain-of-custody timeline.

---

## 🖥️ Live Demo

**Application:** https://africa-farm-trace.vercel.app

**Source Code:** https://github.com/pedrodls/africa-farm-trace

### How to Explore the Demo

1. Open the application.
2. Select the public verification experience.
3. Enter `AF-KE-2026-001`.
4. Explore the producer information, origin, geographical visualization, and traceability timeline.
5. Navigate to Producer Registration to create a new timber lot.
6. Open the Dashboard to explore registered lots and summary indicators.

---

## ⚙️ Getting Started

### Requirements

- Node.js
- pnpm 12+
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/pedrodls/africa-farm-trace.git

cd africa-farm-trace
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the application:

```text
http://localhost:3000
```

### Production Build

Run the quality checks:

```bash
pnpm lint
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## 🏗️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Application framework |
| React 19 | User interface |
| TypeScript | Type safety |
| CSS | Responsive visual interface |
| Browser Local Storage | MVP data persistence |
| SVG | Field and parcel visualization |
| Vercel | Application deployment |

The MVP uses a lightweight client-side architecture to keep the implementation simple and focused on the core traceability experience.

---

## 🗺️ Project Vision & Roadmap

Africa Farm Trace is designed to evolve beyond timber traceability into a broader agricultural supply chain platform.

Potential expansion areas include:

**1. Agricultural Production**
- Producer and farm registration.
- Crop and production monitoring.
- Seed and agricultural input traceability.

**2. Processing & Transformation**
- Registration of certified processing facilities.
- Product transformation records.
- Batch and chain-of-custody management.

**3. Quality & Certification**
- Laboratory integrations.
- Product quality assessments.
- Certification and compliance documentation.

**4. Logistics & International Trade**
- Export documentation.
- Shipment traceability.
- Exporter and buyer integration.

**5. Multi-Product Traceability**
- Coffee.
- Timber.
- Other agricultural products.

The long-term goal is to establish a connected ecosystem that improves transparency, economic opportunity, and trust across African supply chains.

---

## ⚠️ MVP Scope & Transparency

This project is a hackathon MVP and demonstration of the proposed traceability experience.

The following limitations are intentional:

- Demo records and chain-of-custody events use illustrative data.
- Field coordinates and parcel polygons are demonstration data, not independently verified geographical evidence.
- Evidence indicators do not represent official certification.
- The application does not issue government certificates or make legally binding EUDR compliance decisions.
- Data is stored locally in the browser, not in a production database.
- Authentication, laboratory systems, customs, and external certification integrations are not yet implemented.

A future production implementation would require authoritative data sources, verified stakeholders, secure persistence, and integration with relevant regulatory and certification systems.

---

## 🧠 AI-Assisted Development & Token Efficiency

This project was developed with an emphasis on efficient AI-assisted software development.

Our token optimization approach:

1. Used focused prompts with explicit requirements to avoid repeatedly providing unnecessary project context.
2. Limited code exploration and AI context to the files and components relevant to each task.
3. Reused existing architecture and components, avoiding unnecessary code generation and additional dependencies.

*These statements should reflect the actual development workflow. Adjust them if your implementation process differed.*

### GitHub Copilot Usage Evidence

A screenshot of GitHub Copilot token usage, obtained using the `/usage` command, should accompany the hackathon submission.

---

## 🌱 Our Mission

**Transforming African supply chains through technology, transparency, and trust.**

We believe that African products deserve global recognition, that producers deserve better market opportunities, and that responsible production should be verifiable.

Africa Farm Trace aims to help make that possible.

**Built for Africa. Connected to the World.**
