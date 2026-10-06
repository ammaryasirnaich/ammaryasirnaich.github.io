import type { ArchitectureStep } from "@/content/projects";

export function PipelineDiagram({
  steps,
  label,
  compact = false,
}: {
  steps: ArchitectureStep[];
  label: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <ol aria-label={label} className="flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((step, index) => (
          <li key={step.title} className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
              {step.title}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="text-muted">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol aria-label={label} className="grid gap-3 sm:grid-cols-2">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="rounded-xl border border-border bg-background px-4 py-3"
        >
          <p className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-1 font-medium text-foreground">{step.title}</p>
          {step.detail ? (
            <p className="mt-1 text-sm leading-6 text-muted">{step.detail}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
