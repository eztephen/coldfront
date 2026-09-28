import { SITE } from "@/config/site";

// Tap-to-call is the single most valuable control on a trade site's mobile view.
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1.2fr_1fr] shadow-[0_-3px_18px_rgb(6_12_20/0.3)] sm:hidden">
      <a
        href={SITE.phone.href}
        className="bg-hivis px-2 py-4 text-center font-display text-[0.85rem] font-extrabold tracking-[0.07em] text-navy uppercase"
      >
        Call {SITE.phone.display}
      </a>
      <a
        href="#quote"
        className="bg-navy px-2 py-4 text-center font-display text-[0.85rem] font-extrabold tracking-[0.07em] text-white uppercase"
      >
        Free quote
      </a>
    </div>
  );
}
