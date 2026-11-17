"use client";

import BrandNav from "./components/BrandNav";
import DashboardView from "./components/DashboardView";
import ProducerView from "./components/ProducerView";
import SiteFooter from "./components/SiteFooter";
import VerificationView from "./components/VerificationView";
import { demoLot } from "./components/data";
import { useTraceability } from "./components/useTraceability";

export default function Home() {
  const trace = useTraceability();
  const showVerify = trace.view === "verify";
  const showProducer = trace.view === "producer";
  const showDashboard = trace.view === "dashboard";

  return <main>

    <BrandNav view={trace.view} onChange={trace.setView} />

    {showVerify &&
      <VerificationView
        code={trace.code}
        onCodeChange={trace.setCode}
        onSubmit={trace.verify}
        onDemo={() => trace.selectLot(demoLot.code)}
        searched={trace.searchedCode.length > 0}
        lot={trace.matchedLot}
        copied={trace.copied}
        onCopy={trace.copyCode} />
    }
    {showProducer &&
      <ProducerView
        createdCode={trace.createdCode}
        onRegister={trace.register}
        onView={trace.selectLot} />
    }
    {showDashboard &&
      <DashboardView
        lots={trace.lots}
        volume={trace.totalVolume}
        coverage={trace.evidenceCoverage}
        onNew={() => trace.setView("producer")}
        onSelect={trace.selectLot} />}
    <SiteFooter />
  </main>;
}
