import Link from "next/link";
import { View } from "./types";

type Props = { view: View; onChange: (view: View) => void };

export default function BrandNav({ view, onChange }: Props) {
  return <nav className="nav-shell">
    <Link className="brand" href="/"><span className="brand-mark">AF</span><span>Africa Farm Trace</span></Link>
    <div className="nav-actions">
      {(["verify", "producer", "dashboard"] as View[]).map((item) => <button className={view === item ? "nav-active" : ""} key={item} onClick={() => onChange(item)}>{item === "verify" ? "Verify" : item === "producer" ? "Register lot" : "Dashboard"}</button>)}
    </div>
    <span className="nav-note">MVP demonstrator</span>
  </nav>;
}
