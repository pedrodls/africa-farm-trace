import { TimberLot } from "./types";
import FieldMap from "./FieldMap";

type Props = { lot: TimberLot; copied: boolean; onCopy: (code: string) => void };

export default function TraceView({ lot, copied, onCopy }: Props) {
  return <section className="trace-shell" aria-live="polite"><div className="trace-heading"><div><p className="eyebrow">Verified trace</p><h2>{lot.product}</h2><p className="trace-code">LOT {lot.code}</p></div><div className="verified-badge"><span>✓</span> Verified trace</div></div><div className="lot-grid"><Details lot={lot} copied={copied} onCopy={onCopy} /><Timeline lot={lot} /></div><FieldMap fields={lot.fields} /></section>;
}

function Details({ lot, copied, onCopy }: Props) {
  return <div className="details-panel"><h3>Lot profile</h3><div className="detail-list"><div><span>Producer</span><strong>{lot.producer}</strong></div><div><span>Origin</span><strong>{lot.origin}</strong></div><div><span>Species</span><strong>{lot.species}</strong></div><div><span>Quantity</span><strong>{lot.quantity}</strong></div><div><span>Harvest date</span><strong>{lot.harvestDate}</strong></div></div><div className="evidence-box"><div className="evidence-title"><span>◎</span> Evidence available</div>{lot.evidence.map((item) => <p key={item}><span>✓</span>{item}</p>)}<small>Demo evidence only — not a legal certification.</small><button className="copy-code" onClick={() => onCopy(lot.code)}>{copied ? "Code copied" : `Copy ${lot.code}`}</button></div></div>;
}

function Timeline({ lot }: { lot: TimberLot }) {
  return <div className="timeline-panel"><div className="panel-heading"><h3>Chain of custody</h3><span>{lot.events.length} events</span></div><div className="timeline">{lot.events.map((event) => <div className="timeline-item" key={`${event.title}-${event.date}`}><div className={`timeline-marker ${event.status}`} /><div className="timeline-content"><div className="timeline-meta"><span>{event.date}</span><span>{event.actor}</span></div><h4>{event.title}</h4><p>{event.detail}</p></div></div>)}</div></div>;
}
