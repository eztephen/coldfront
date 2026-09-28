import { SITE } from "@/config/site";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-navy py-[clamp(3.2rem,7vw,5.5rem)] text-center text-white">
      <div className="site-wrap flex flex-col items-center gap-5">
        <span className="kicker text-hivis">Get it sorted</span>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none font-extrabold tracking-[-0.03em] text-balance">
          Tell us what&rsquo;s broken. We&rsquo;ll tell you the <mark className="hivis-mark">price</mark> first.
        </h2>
        <p className="max-w-[48ch] text-mist">
          A {SITE.callbackPromise} callback during business hours, and a real technician on the phone — not a call centre
          reading a script.
        </p>
        <a
          href={SITE.phone.href}
          className="font-display text-[clamp(2rem,5.5vw,3.2rem)] font-extrabold tracking-[-0.04em] text-hivis"
        >
          {SITE.phone.display}
        </a>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#quote" className="btn btn-hivis">
            Request a free quote
          </a>
          <a href="#pricing" className="btn btn-outline-light">
            See our pricing
          </a>
        </div>
      </div>
    </section>
  );
}
