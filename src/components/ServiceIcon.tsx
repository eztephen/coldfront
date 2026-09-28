import type { ServiceIcon as IconName } from "@/data/content";

const paths: Record<IconName, React.ReactNode> = {
  aircon: (
    <>
      <rect x="2" y="4" width="20" height="9" rx="1.5" />
      <path d="M6 8h12M6 17c0 1.5 1 2.5 2.5 2.5S11 18.5 11 17M14 17c0 2 1.2 3.5 3 3.5" strokeLinecap="round" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" strokeLinejoin="round" />,
  service: (
    <>
      <path d="M12 2v6M12 22v-4M4.9 4.9l4.2 4.2M19.1 19.1l-3-3M2 12h6M22 12h-4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" />
    </>
  ),
};

export default function ServiceIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
