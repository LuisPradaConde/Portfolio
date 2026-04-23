type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light'
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.34em] ${
          isDark ? 'text-white/55' : 'text-[var(--accent)]'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl ${
          isDark ? 'text-white' : 'text-[var(--foreground)]'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 md:text-[1.05rem] ${
            isDark ? 'text-white/68' : 'text-[var(--muted)]'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
