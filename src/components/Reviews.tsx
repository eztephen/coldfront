import { REVIEWS } from "@/data/content";
import SectionHeading from "./SectionHeading";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`size-4 ${i < count ? "text-star" : "text-line"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5 12.4 7l5.6.5-4.3 3.9 1.3 5.6L10 14l-5 3 1.3-5.6L2 7.5 7.6 7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="Reviews" title="1,240 reviews. Here are three of the honest ones." />
        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col gap-3.5 border border-line bg-white px-6 py-6">
              <Stars count={r.stars} />
              <blockquote className="text-[0.97rem]">{r.body}</blockquote>
              <figcaption className="mt-auto text-[0.85rem] text-ink-soft">
                <b className="block text-[0.92rem] text-ink">{r.name}</b>
                {r.suburb}
              </figcaption>
              <div className="border-t border-line pt-3 font-display text-[0.66rem] font-bold tracking-[0.12em] text-ink-faint uppercase">
                {r.job}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
