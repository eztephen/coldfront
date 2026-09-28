import { PRICING, PRICING_NOTE } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-white py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading
          kicker="Pricing"
          title="Our prices are on the site because we're not embarrassed by them."
          lede="Every job is quoted at a fixed price before work starts. These are the standard rates we start from."
        />
        <div className="border border-line">
          {PRICING.map((row) => (
            <div
              key={row.item}
              className="grid grid-cols-[1fr_auto] items-center gap-6 border-b border-line px-5 py-4 last:border-b-0 odd:bg-ground"
            >
              <div>
                <b className="block font-bold">{row.item}</b>
                <span className="text-[0.87rem] text-ink-soft">{row.detail}</span>
              </div>
              <span
                className={`font-display text-[1.3rem] font-extrabold tracking-[-0.03em] whitespace-nowrap tabular-nums ${
                  row.free ? "text-ok" : ""
                }`}
              >
                {row.amount}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[0.9rem] text-ink-soft">{PRICING_NOTE}</p>
      </div>
    </section>
  );
}
