import { SERVICES } from "@/data/content";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading
          kicker="What we do"
          title="Two trades, one van, one invoice."
          lede="Most aircon jobs need an electrician anyway. We hold both licences, so you're not waiting on a second contractor to finish what the first one started."
        />
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col gap-2.5 border-t-4 border-transparent bg-white px-6 pt-6 pb-7 transition-colors hover:border-hivis"
            >
              <ServiceIcon name={s.icon} className="size-8 text-navy" />
              <h3 className="font-display text-[1.18rem] font-extrabold tracking-[-0.03em]">{s.title}</h3>
              <p className="text-[0.93rem] text-ink-soft">{s.body}</p>
              <ul className="tick-list mt-1 flex flex-col gap-1 text-[0.88rem] text-ink-soft">
                {s.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <span className="mt-auto pt-4 font-display text-[0.85rem] font-extrabold tracking-[0.04em] text-navy uppercase">
                {s.price}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
