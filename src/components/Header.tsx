"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { NAV } from "@/data/content";
import BoltMark from "./BoltMark";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-hivis bg-navy">
      <div className="site-wrap flex items-center justify-between gap-3 py-3.5 sm:gap-6">
        <a href="#top" onClick={closeMobile} className="flex items-center gap-3">
          <BoltMark className="size-9 shrink-0" />
          <span className="font-display text-[1.15rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-white">
            {SITE.shortName}
            <small className="mt-0.5 block font-sans text-[0.6rem] font-semibold tracking-[0.2em] text-hivis uppercase">
              {SITE.descriptor}
            </small>
          </span>
        </a>

        <nav
          id="site-nav"
          className={`${
            mobileOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-[calc(100%+3px)] flex-col shadow-[0_14px_28px_rgb(0_0_0/0.25)] xl:shadow-none border-b-[3px] border-hivis bg-steel px-5 pt-1 pb-4 xl:static xl:flex xl:flex-row xl:items-center xl:gap-6 xl:border-0 xl:bg-transparent xl:p-0`}
        >
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="border-b border-line-dark py-3.5 font-display text-[0.8rem] font-bold tracking-[0.1em] text-mist uppercase transition-colors hover:text-hivis xl:border-0 xl:py-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <a href={SITE.phone.href} className="hidden flex-col leading-[1.1] sm:flex">
            <small className="font-display text-[0.62rem] font-bold tracking-[0.14em] text-hivis uppercase">
              24/7 callout
            </small>
            <b className="font-display text-[1.2rem] font-extrabold tracking-[-0.02em] text-white">{SITE.phone.display}</b>
          </a>
          <a href="#quote" onClick={closeMobile} className="btn btn-hivis px-3.5 py-3 max-[379px]:hidden sm:px-[1.7rem] sm:py-4">
            Free quote
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-[3.5px] border-2 border-line-dark px-2.5 py-2.5 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="site-nav"
          >
            <span className="block h-0.5 w-[19px] bg-hivis" />
            <span className="block h-0.5 w-[19px] bg-hivis" />
            <span className="block h-0.5 w-[19px] bg-hivis" />
          </button>
        </div>
      </div>
    </header>
  );
}
