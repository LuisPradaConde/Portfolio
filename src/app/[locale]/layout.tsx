import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {withBasePath} from '@/lib/site-path';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({
  params
}: Pick<LocaleLayoutProps, 'params'>): Promise<Metadata> {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'meta'});
  const baseUrl = 'https://luispradaconde.github.io';
  const canonical = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
    applicationName: 'Premium CV Portfolio',
    keywords: [
      'Luis Prada Conde',
      'Cybersecurity engineer',
      'Cyber intelligence',
      'DevSecOps',
      'Infrastructure security'
    ],
    authors: [{name: 'Luis Prada Conde'}],
    creator: 'Luis Prada Conde',
    alternates: {
      canonical,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonical,
      siteName: 'Premium CV Portfolio',
      locale,
      type: 'website',
      images: [
        {
          url: withBasePath('/images/foto-perfil.jpeg'),
          width: 800,
          height: 960,
          alt: 'Professional portfolio preview'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [withBasePath('/images/foto-perfil.jpeg')]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
