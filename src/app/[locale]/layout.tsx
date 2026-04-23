import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

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

  const t = await getTranslations({locale, namespace: 'meta'});
  const baseUrl = 'https://portfolio-example.dev';
  const canonical = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
    applicationName: 'Premium CV Portfolio',
    keywords: [
      'Next.js portfolio',
      'React CV',
      'TypeScript portfolio',
      'Frontend engineer',
      'Premium resume website'
    ],
    authors: [{name: 'Adrian Navarro'}],
    creator: 'Adrian Navarro',
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
          url: '/images/profile-placeholder.svg',
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
      images: ['/images/profile-placeholder.svg']
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
