import { HERO } from "@/data/content";
import Emphasis from "./Emphasis";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="livery relative overflow-hidden bg-navy pt-[clamp(2.75rem,6vw,4.5rem)] pb-[clamp(3rem,6vw,5rem)] text-white">
      <div className="site-wrap relative z-10 grid items-center gap-[clamp(2rem,4vw,3.5rem)] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <h1 className="font-display text-[clamp(2.5rem,6.4vw,4.6rem)] leading-none font-extrabold tracking-[-0.03em] text-balance">
            <Emphasis text={HERO.headline} />
          </h1>
          <p className="mt-5 max-w-[44ch] text-[clamp(1.02rem,2vw,1.2rem)] text-mist">{HERO.sub}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {HERO.badges.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-1.5 border-[1.5px] border-line-dark px-3 py-2 font-display text-[0.72rem] font-bold tracking-[0.09em] text-[#D4DEE6] uppercase"
              >
                <svg className="size-[13px] shrink-0 text-hivis" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M8 13.2 4.8 10l-1.3 1.3L8 15.8l8.5-8.5-1.3-1.3z" />
                </svg>
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
