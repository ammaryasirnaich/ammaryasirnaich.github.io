import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  external?: boolean;
};

const styles = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border border-border bg-card text-foreground hover:border-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  download = false,
  external = false,
}: ButtonProps) {
  const className = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-opacity duration-200",
    styles[variant],
  );

  if (download || external || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        download={download || undefined}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
