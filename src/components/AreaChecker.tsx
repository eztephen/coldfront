"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { SERVICE_AREAS, SERVICE_POSTCODES } from "@/data/content";

type Result = { kind: "empty" } | { kind: "covered"; place: string; slot: string } | { kind: "outside" };

const lookup = new Map<string, { place: string; slot: string }>([
  ...Object.entries(SERVICE_AREAS).map(([place, slot]) => [place.toLowerCase(), { place, slot }] as const),
  ...Object.entries(SERVICE_POSTCODES).map(([code, slot]) => [code, { place: code, slot }] as const),
]);

export default function AreaChecker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const check = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const key = query.trim().toLowerCase();
    if (!key) return setResult({ kind: "empty" });
    const match = lookup.get(key);
    setResult(match ? { kind: "covered", ...match } : { kind: "outside" });
  };

  return (
    <form onSubmit={check} className="border border-line-dark bg-navy p-6">
      <label
        htmlFor="suburb-check"
        className="mb-2.5 block font-display text-[0.7rem] font-extrabold tracking-[0.15em] text-hivis uppercase"
      >
        Check your suburb
      </label>
      <div className="flex flex-wrap gap-2.5">
        <input
          id="suburb-check"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your suburb or postcode"
          autoComplete="address-level2"
          className="min-w-44 flex-1 border-[1.5px] border-line-dark bg-steel-lift px-3.5 py-3.5 text-[1.02rem] text-white placeholder:text-[#7D8D9B] focus:border-hivis focus:outline-none"
        />
        <button type="submit" className="btn btn-hivis">
          Check
        </button>
      </div>

      <div role="status" aria-live="polite">
        {result?.kind === "covered" && (
          <p className="mt-4 border-l-4 border-hivis bg-hivis/10 px-4 py-3.5 text-[0.95rem] text-[#E9F7C4]">
            <b className="text-hivis">Yes — we cover {result.place}.</b>
            <br />
            Next standard appointment: <b className="text-hivis">{result.slot}</b>. Emergencies, same day.
          </p>
        )}
        {result?.kind === "outside" && (
          <p className="mt-4 border-l-4 border-urgent bg-urgent/15 px-4 py-3.5 text-[0.95rem] text-[#F5CDC8]">
            <b className="text-[#FF8C7E]">That one is outside our standard run.</b>
            <br />
            We still travel there for installs and landlord portfolios — ring {SITE.phone.display} and we&rsquo;ll sort
            something.
          </p>
        )}
        {result?.kind === "empty" && (
          <p className="mt-4 border-l-4 border-urgent bg-urgent/15 px-4 py-3.5 text-[0.95rem] text-[#F5CDC8]">
            <b className="text-[#FF8C7E]">Enter a suburb</b> — or just ring us on {SITE.phone.display}.
          </p>
        )}
      </div>

      <p className="mt-4 text-[0.87rem] text-[#94A5B3]">
        Not listed? Ring us anyway — we travel further for install jobs and for landlord portfolios.
      </p>
    </form>
  );
}
