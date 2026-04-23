import {type Locale, profile} from '@/data/profile';

type ExperienceTimelineProps = {
  items: typeof profile.experience;
  locale: Locale;
};

export function ExperienceTimeline({
  items,
  locale
}: ExperienceTimelineProps) {
  return (
    <div className="relative border-l border-white/8 pl-8 md:pl-10">
      {items.map((item) => (
        <article
          key={`${item.company}-${item.period.en}`}
          className="relative mb-12 rounded-[1.5rem] border border-transparent p-1 transition hover:border-white/8 last:mb-0"
        >
          <span className="absolute -left-[2.15rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] shadow-[0_0_20px_rgba(109,124,255,0.55)] md:-left-[2.72rem]" />
          <div className="rounded-[1.35rem] bg-white/[0.03] px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {item.period[locale]} / {item.location}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {item.role[locale]}
            </h3>
            <p className="mt-2 text-base font-medium text-[var(--muted-strong)]">
              {item.company}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">
              {item.summary[locale]}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
