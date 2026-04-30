import {type Locale, profile} from '@/data/profile';

type SkillBarProps = {
  skill: (typeof profile.skills)[number];
  locale: Locale;
};

export function SkillBar({skill, locale}: SkillBarProps) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-md)] backdrop-blur transition hover:border-[var(--line-strong)] hover:bg-[rgba(18,24,48,0.92)]">
      <h3 className="text-lg font-semibold text-white">
        {skill.category[locale]}
      </h3>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--line)] bg-black/20 px-3.5 py-2 text-sm text-[var(--muted-strong)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
