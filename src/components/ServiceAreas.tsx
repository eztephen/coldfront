import { SERVICE_AREAS } from "@/data/content";
import SectionHeading from "./SectionHeading";
import AreaChecker from "./AreaChecker";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-steel py-[clamp(3.2rem,7vw,5.5rem)] text-white">
      <div className="site-wrap grid items-start gap-[clamp(2rem,5vw,4rem)] md:grid-cols-2">
        <div>
          <SectionHeading
            onDark
            kicker="Service areas"
            title="Are we in your suburb?"
            lede="We cover the northern suburbs out to the highway. Type your suburb in and we'll tell you straight away — including the next slot we actually have free."
          />
          <ul className="flex flex-wrap gap-1.5">
            {Object.keys(SERVICE_AREAS).map((area) => (
              <li key={area} className="border border-line-dark px-2.5 py-1.5 text-[0.83rem] text-mist">
                {area}
              </li>
            ))}
          </ul>
        </div>
        <AreaChecker />
      </div>
    </section>
  );
}
