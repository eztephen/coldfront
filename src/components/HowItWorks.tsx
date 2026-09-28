import { STEPS } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  return (
    <section id="how" className="py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="How it works" title="Four steps, no surprises." />
        <ol className="steps grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.title} className="step flex flex-col gap-2 bg-white px-5 pt-6 pb-6">
              <h3 className="font-display text-[1.05rem] font-extrabold tracking-[-0.02em]">{step.title}</h3>
              <p className="text-[0.9rem] text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
