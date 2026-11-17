import { FormEvent } from "react";
import { TimberLot } from "./types";
import TraceView from "./TraceView";

type Props = { code: string; onCodeChange: (value: string) => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void; onDemo: () => void; searched: boolean; lot?: TimberLot; copied: boolean; onCopy: (code: string) => void };

export default function VerificationView({ code, onCodeChange, onSubmit, onDemo, searched, lot, copied, onCopy }: Props) {
  return <>
    <section className="hero-shell"><div className="hero-copy"><p className="eyebrow">From origin to opportunity</p><h1>Make every timber story <em>verifiable.</em></h1><p className="hero-text">A simple traceability layer for African producers, connecting trusted origin data to better markets and responsible trade.</p><div className="hero-stats"><div><strong>01</strong><span>Producer origin</span></div><div><strong>02</strong><span>Chain of custody</span></div><div><strong>03</strong><span>Market evidence</span></div></div></div>
      <div className="lookup-card"><div className="card-kicker"><span className="pulse-dot" /> Public verification</div><h2>Verify a timber lot</h2><p>Enter the code shared by the producer or exporter.</p><form onSubmit={onSubmit}><label htmlFor="verification-code">Verification code</label><div className="input-row"><input id="verification-code" value={code} onChange={(event) => onCodeChange(event.target.value)} placeholder="e.g. AF-KE-2026-001" autoComplete="off" /><button type="submit">Verify <span>→</span></button></div></form><button className="example-button" type="button" onClick={onDemo}>Try the demo code: AF-KE-2026-001</button>{searched && <div className={`search-result ${lot ? "success" : "error"}`} aria-live="polite"><span>{lot ? "✓" : "!"}</span>{lot ? "Trace found — evidence package available." : "No trace found. Check the code and try again."}</div>}</div>
    </section>
    {lot && <TraceView lot={lot} copied={copied} onCopy={onCopy} />}
  </>;
}
