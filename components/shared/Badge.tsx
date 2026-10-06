import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tone === "accent"
          ? "bg-accent-soft text-accent"
          : "border border-border bg-card text-muted",
      )}
    >
      {children}
    </span>
  );
}
