interface SectionHeadingProps {
  kicker: string;
  title: string;
  lede?: string;
  onDark?: boolean;
}

export default function SectionHeading({ kicker, title, lede, onDark = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex max-w-[56ch] flex-col gap-3">
      <span className={`kicker ${onDark ? "text-hivis" : ""}`}>{kicker}</span>
      <h2
        className={`font-display text-[clamp(1.9rem,4.6vw,3rem)] leading-none font-extrabold tracking-[-0.03em] text-balance ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && <p className={`max-w-[62ch] ${onDark ? "text-mist" : "text-ink-soft"}`}>{lede}</p>}
    </div>
  );
}
