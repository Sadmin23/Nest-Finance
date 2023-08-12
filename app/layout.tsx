import { ReactNode, Suspense } from 'react';
import './globals.css';
import Nav from '../components/Nav';
import { ReactQueryProvider } from '@/components/React-query-provider';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE,
      },
    }),
};

const roboto = (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
  />
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title.default}</title>
        <link
          rel="icon"
          href="\favicon.ico"
          type="image/x-icon"
          sizes="any"
        ></link>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
        {roboto}
      </head>
      {/* <body className="bg-white text-black selection:bg-teal-300 dark:bg-black dark:text-white dark:selection:bg-fuchsia-600 dark:selection:text-white"> */}
      <body className="bg-white text-black selection:bg-teal-300">
        <Nav />
        <Suspense>
          <ReactQueryProvider>
            <main>{children}</main>
          </ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
