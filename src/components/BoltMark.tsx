export default function BoltMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" fill="var(--hivis)" />
      <path d="M22 6 11 22h7l-2 12 13-17h-8z" fill="var(--navy)" />
    </svg>
  );
}
