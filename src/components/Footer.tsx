import { SITE } from "@/config/site";
import { NAV, SERVICE_AREAS, SERVICES } from "@/data/content";

const YEAR = new Date().getFullYear();

const headingClass = "mb-3.5 font-display text-[0.7rem] font-extrabold tracking-[0.18em] text-hivis uppercase";
const linkClass = "block py-1 text-[#94A5B3] transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-14 pb-6 text-[0.94rem] text-[#94A5B3]">
      <div className="site-wrap">
        <div className="grid gap-7 border-b border-line-dark pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-9">
          <div>
            <div className="mb-2.5 font-display text-[1.4rem] font-extrabold tracking-[-0.03em] text-white">
              {SITE.shortName}
            </div>
            <p className="text-[0.9rem]">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>
            <p className="mt-3">
              <a href={SITE.phone.href} className="inline-block py-1.5 text-[1.05rem] font-bold text-hivis">
                {SITE.phone.display}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="inline-block py-1.5 break-all hover:text-white">
                {SITE.email}
              </a>
            </p>
            <p className="mt-3 text-[0.82rem] text-[#5D6E7C]">{SITE.licences}</p>
          </div>
          <div>
            <h4 className={headingClass}>Services</h4>
            {SERVICES.map((s) => (
              <a key={s.title} href="#services" className={linkClass}>
                {s.title}
              </a>
            ))}
          </div>
          <div>
            <h4 className={headingClass}>Areas</h4>
            {Object.keys(SERVICE_AREAS)
              .slice(0, 4)
              .map((area) => (
                <a key={area} href="#areas" className={linkClass}>
                  {area}
                </a>
              ))}
            <a href="#areas" className={linkClass}>
              All areas
            </a>
          </div>
          <div>
            <h4 className={headingClass}>Company</h4>
            {NAV.filter((l) => l.href !== "#services" && l.href !== "#areas").map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={linkClass}>
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-5 text-[0.79rem] text-[#5D6E7C]">
          <span>
            © {YEAR} {SITE.name}. A fictional business, built as a design sample.
          </span>
          <span>Privacy · Terms · Warranty</span>
        </div>
      </div>
    </footer>
  );
}
