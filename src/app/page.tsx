import {withBasePath} from '@/lib/site-path';

export default function IndexPage() {
  const destination = withBasePath('/es/');

  return (
    <main>
      <meta httpEquiv="refresh" content={`0; url=${destination}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(destination)});`
        }}
      />
      <a href={destination}>Ir al portfolio</a>
    </main>
  );
}
