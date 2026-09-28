"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { QUOTE_FORM } from "@/data/content";

const fieldClass =
  "w-full min-w-0 border-[1.5px] border-line bg-ground px-3 py-2.5 text-base text-ink focus:border-navy focus:bg-white focus:outline-none";
const labelClass = "font-display text-[0.68rem] font-bold tracking-[0.13em] text-ink-soft uppercase";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  // Sample site: confirms in place. For a live client, POST to a route handler that
  // texts or emails the office — see pzaideletrato/src/app/api/contact/route.ts.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form
      id="quote"
      onSubmit={handleSubmit}
      className="min-w-0 scroll-mt-28 border-t-[5px] border-hivis bg-white px-5 pt-6 pb-7 text-ink shadow-[0_18px_40px_rgb(6_12_20/0.35)] sm:px-6"
    >
      <h2 className="mb-1 font-display text-[1.5rem] leading-none font-extrabold tracking-[-0.03em]">Get a fixed quote</h2>
      <p className="mb-5 text-[0.9rem] text-ink-soft">
        Fill this in and we&rsquo;ll call you back within {SITE.callbackPromise} during business hours.
      </p>

      {sent && (
        <div role="status" className="mb-4 border-2 border-ok bg-[#E6F4EC] px-4 py-3.5 text-[0.93rem] text-[#124D31]">
          <b>Got it — we&rsquo;ll ring you within {SITE.callbackPromise}.</b>
          <br />
          If it&rsquo;s urgent right now, call {SITE.phone.display} instead.
        </div>
      )}

      <label className="mb-3.5 flex flex-col gap-1.5">
        <span className={labelClass}>What do you need done?</span>
        <select name="job" className={fieldClass}>
          {QUOTE_FORM.jobs.map((job) => (
            <option key={job}>{job}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-x-3.5 sm:grid-cols-2">
        <label className="mb-3.5 flex flex-col gap-1.5">
          <span className={labelClass}>Name</span>
          <input name="name" type="text" autoComplete="name" required className={fieldClass} />
        </label>
        <label className="mb-3.5 flex flex-col gap-1.5">
          <span className={labelClass}>Mobile</span>
          <input name="mobile" type="tel" autoComplete="tel" required className={fieldClass} />
        </label>
        <label className="mb-3.5 flex flex-col gap-1.5">
          <span className={labelClass}>Suburb</span>
          <input name="suburb" type="text" autoComplete="address-level2" placeholder="e.g. Northgate" className={fieldClass} />
        </label>
        <label className="mb-3.5 flex flex-col gap-1.5">
          <span className={labelClass}>When?</span>
          <select name="urgency" className={fieldClass}>
            {QUOTE_FORM.urgency.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-navy w-full">
        Send my details
      </button>
      <p className="mt-3 text-center text-[0.78rem] text-ink-faint">No obligation. We never pass your number on.</p>
    </form>
  );
}
