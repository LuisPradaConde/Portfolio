'use client';

import {useState} from 'react';
import {Menu, X} from 'lucide-react';

type MobileNavProps = {
  locale: 'es' | 'en';
  items: Array<{id: string; label: string}>;
  openLabel: string;
  closeLabel: string;
};

export function MobileNav({
  locale,
  items,
  openLabel,
  closeLabel
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? closeLabel : openLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] text-[var(--muted-strong)] transition hover:bg-white/[0.06] hover:text-white"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute left-4 right-4 top-[calc(100%+0.75rem)] overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[rgba(8,12,24,0.94)] p-4 shadow-[var(--shadow-lg)] backdrop-blur-2xl"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <nav className="grid gap-2">
            {items.map((item) => (
              <a
                key={item.id}
                href={`/${locale}#${item.id}`}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
