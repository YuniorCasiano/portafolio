export default function StatusBadge({ label = 'UP', size = 'md' }) {
  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full bg-up-soft dark:bg-up/15 text-up font-mono font-medium tracking-wide ${sizes[size]}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-up opacity-60"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-up"></span>
      </span>
      {label}
    </span>
  )
}
