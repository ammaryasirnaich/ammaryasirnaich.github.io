"use client";

import { useState } from "react";

export function CopyCitation({ citation }: { citation: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-4">
      <pre className="overflow-x-auto rounded-xl border border-border bg-background p-4 text-xs leading-5 text-foreground">
        {citation}
      </pre>
      <button
        type="button"
        onClick={onCopy}
        className="mt-3 inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground"
      >
        {copied ? "Copied" : "Copy citation"}
      </button>
    </div>
  );
}
