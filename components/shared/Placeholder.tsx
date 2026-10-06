import { PLACEHOLDER_RESULT, PLACEHOLDER_VISUAL } from "@/data/site";

export function Placeholder({ kind }: { kind: "result" | "visual" }) {
  const text = kind === "result" ? PLACEHOLDER_RESULT : PLACEHOLDER_VISUAL;
  return (
    <p className="rounded-lg border border-dashed border-border bg-accent-soft/50 px-4 py-3 font-mono text-sm text-foreground">
      {text}
    </p>
  );
}
