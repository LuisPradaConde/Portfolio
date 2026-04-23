import {getTranslations} from 'next-intl/server';
import {Github, Linkedin, Mail, Palette} from 'lucide-react';
import {profile, type Locale} from '@/data/profile';
import {CopyEmailButton} from '@/components/ui/copy-email-button';
import {Reveal} from '@/components/ui/reveal';
import {SectionHeading} from '@/components/ui/section-heading';

type ContactSectionProps = {
  locale: Locale;
};

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Behance: Palette
} as const;

export async function ContactSection({locale}: ContactSectionProps) {
  const t = await getTranslations({locale, namespace: 'contact'});

  return (
    <section id="contact" className="px-6 py-20 pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(18,26,49,0.9),rgba(14,20,38,0.9))] px-8 py-10 text-white shadow-[var(--shadow-lg)] md:px-12 md:py-14">
        <Reveal>
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
            tone="dark"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal delay={0.08}>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-white/70">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(109,124,255,0.18),rgba(139,92,246,0.18))]">
                  <Mail size={18} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                  {t('emailLabel')}
                </p>
              </div>

              <a
                href={`mailto:${profile.contact.email}`}
                className="mt-5 block break-all text-2xl font-semibold tracking-tight text-white md:text-3xl"
              >
                {profile.contact.email}
              </a>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/68">
                {t('body')}
              </p>
              <CopyEmailButton
                email={profile.contact.email}
                label={t('copy')}
                successLabel={t('copied')}
              />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                {t('linksLabel')}
              </p>
              <div className="mt-4 grid gap-3">
                {profile.contact.links.map((link) => {
                  const Icon = iconMap[link.label as keyof typeof iconMap];

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white/80 transition hover:border-[var(--line-strong)] hover:bg-white/[0.05] hover:text-white"
                    >
                      {Icon ? <Icon size={16} /> : null}
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
