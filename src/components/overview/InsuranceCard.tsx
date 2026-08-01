import { ShieldCheck, Phone } from "lucide-react";
import type { Insurance } from "../../data/types";
import { formatShortDate } from "../../utils/dateFormat";
import { CardLinks } from "../common/CardLinks";

export function InsuranceCard({ insurance }: { insurance: Insurance }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2 text-accent">
        <ShieldCheck size={18} />
        <span className="text-xs font-bold uppercase tracking-wide">Travel Insurance</span>
      </div>
      <p className="mt-1 font-semibold text-ink">{insurance.provider}</p>
      <p className="text-sm text-ink-soft">Policy #{insurance.policyNumber}</p>
      <p className="mt-1 font-mono text-sm tabular-nums text-ink-soft">
        Covers all 5 travelers · {formatShortDate(insurance.coverageStart)} → {formatShortDate(insurance.coverageEnd)}
      </p>
      <p className="mt-2 text-xs text-ink-soft/80">{insurance.coverageSummary.join(" · ")}</p>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft">
        <Phone size={14} /> {insurance.emergencyPhone} (24/7) · {insurance.emergencyEmail}
      </p>
      <CardLinks bookingUrl={insurance.bookingUrl} bookingLabel="PassportCard site" driveFileId={insurance.driveFileId} />
    </div>
  );
}
