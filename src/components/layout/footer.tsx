import {profile, type Locale} from '@/data/profile';

type FooterProps = {
  locale: Locale;
};

export function Footer({locale}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-10 pt-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.75rem] border border-[var(--line)] bg-[rgba(9,13,26,0.82)] px-6 py-6 text-sm text-[var(--muted)] shadow-[var(--shadow-md)] backdrop-blur md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} / {profile.role[locale]}
        </p>
        <p>{year} / {profile.location}</p>
      </div>
    </footer>
  );
}
