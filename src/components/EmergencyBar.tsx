import { SITE } from "@/config/site";
import { EMERGENCY } from "@/data/content";

export default function EmergencyBar() {
  return (
    <div className="bg-urgent text-white">
      <div className="site-wrap flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center font-display text-[0.82rem] font-bold tracking-[0.06em] uppercase">
        <span className="pulse-dot size-2 shrink-0 rounded-full bg-white" aria-hidden="true" />
        <span className="hidden sm:inline">{EMERGENCY.full}</span>
        <span className="sm:hidden">{EMERGENCY.short}</span>
        <a href={SITE.phone.href} className="font-extrabold underline underline-offset-[3px]">
          {SITE.phone.display}
        </a>
      </div>
    </div>
  );
}
