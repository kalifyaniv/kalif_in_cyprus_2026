import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { BackLink } from "../components/common/BackLink";
import { InsuranceCard } from "../components/overview/InsuranceCard";
import { insurance } from "../data/insurance";

export function InsurancePage() {
  return (
    <div className="space-y-4">
      <BackLink to="/info" label="Trip Info" />
      <SectionHeading icon={<ShieldCheck size={18} />} title="Travel Insurance" />
      <InsuranceCard insurance={insurance} />
    </div>
  );
}
