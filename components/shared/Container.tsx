import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  width = "wide",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "wide" | "reading";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6",
        width === "wide" ? "max-w-[1200px]" : "max-w-[720px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
