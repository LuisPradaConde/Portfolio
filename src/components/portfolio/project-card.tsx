import {ArrowUpRight} from 'lucide-react';
import {type Locale, profile} from '@/data/profile';

type ProjectCardProps = {
  project: (typeof profile.projects)[number];
  locale: Locale;
};

export function ProjectCard({project, locale}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(15,21,42,0.92),rgba(8,12,24,0.92))] p-7 shadow-[var(--shadow-md)] transition duration-300 hover:-translate-y-1.5 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-lg)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(109,124,255,0.16),transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            {project.type[locale]}
          </p>
          <span className="rounded-full border border-white/10 p-2 text-[var(--muted)] transition group-hover:border-[var(--line-strong)] group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white transition group-hover:text-white">
          {project.name}
        </h3>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          {project.summary[locale]}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs text-[var(--muted-strong)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
