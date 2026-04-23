'use client';

import {useState} from 'react';

type CopyEmailButtonProps = {
  email: string;
  label: string;
  successLabel: string;
};

export function CopyEmailButton({
  email,
  label,
  successLabel
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mt-5 inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] px-4 py-2 text-sm text-[var(--muted-strong)] transition hover:border-[var(--line-strong)] hover:bg-white/[0.05] hover:text-white"
    >
      {copied ? successLabel : label}
    </button>
  );
}
