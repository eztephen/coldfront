import { PROOF } from "@/data/content";

export default function ProofStrip() {
  return (
    <div className="bg-hivis text-navy">
      <dl className="site-wrap grid grid-cols-2 gap-px bg-navy/15 md:grid-cols-4">
        {PROOF.map((p) => (
          <div key={p.caption} className="flex flex-col-reverse items-center bg-hivis px-3 py-5 text-center">
            <dt className="mt-1.5 font-display text-[0.68rem] font-bold tracking-[0.11em] uppercase">{p.caption}</dt>
            <dd className="font-display text-[clamp(1.6rem,3.6vw,2.3rem)] leading-none font-extrabold tracking-[-0.04em] tabular-nums">
              {p.figure}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
