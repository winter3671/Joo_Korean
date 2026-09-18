interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-stone-500">
        <span>{label}</span>
        <span className="text-brand-600">
          {current} / {total}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-brand-100">
        <div
          className="h-full rounded-full bg-brand-400 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
