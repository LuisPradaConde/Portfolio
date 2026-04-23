import {type Locale, profile} from '@/data/profile';

type SkillBarProps = {
  skill: (typeof profile.skills)[number];
  locale: Locale;
};

export function SkillBar({skill, locale}: SkillBarProps) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-md)] backdrop-blur transition hover:border-[var(--line-strong)] hover:bg-[rgba(18,24,48,0.92)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {skill.category[locale]}
          </p>
        </div>
        <p className="text-sm font-medium text-[var(--muted-strong)]">
          {skill.level}%
        </p>
      </div>
      <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),#38bdf8,var(--accent-strong))] shadow-[0_0_22px_rgba(109,124,255,0.45)]"
          style={{width: `${skill.level}%`}}
        />
      </div>
    </article>
  );
}
