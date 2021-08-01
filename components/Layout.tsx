import SEO from '@bradgarropy/next-seo';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className='main-container'>
      <SEO
        title={`${title} | Usman Sabuwala`}
        description="I'm Usman, Developer, Student, and Content Creator."
        icon='/logo.png'
        twitter={{
          card: 'summary',
          image: '/usman.jpg',
          site: '@MaxProgramming1',
        }}
        keywords={[
          'usman',
          'usman sabuwala',
          'max programming',
          'max',
          'usman website',
          "usman's website",
          'max programming website',
          'usman sabuwala website',
          'usman portfolio',
        ]}
      />
      {/* <Head>
        <title>{title} | Usman Sabuwala</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta
          name="description"
          content="I'm Usman, Developer, Student, and Content Creator."
        />
        <meta name="image" content="https://usman-s.me/usman.jpg" />

        <meta property="og:title" content="Usman Sabwuala" />
        <meta property="og:type" content="portfolio" />
        <meta property="og:url" content="https://usman-s.me" />
        <meta property="og:image" content="https://usman-s.me/usman.jpg" />
        <meta
          name="og:description"
          content="I'm Usman, Developer, Student, and Content Creator."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@MaxProgramming1" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="I'm Usman, Developer, Student, and Content Creator."
        />
        <meta name="twitter:image" content="https://usman-s.me/usman.jpg" />

        <link rel="canonical" href="https://usman-s.me" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />

        <meta
          name="keywords"
          content="usman, usman sabuwala, max programming, max, usman website, usman's website, max programming website, usman sabuwala website, usman portfolio"
        />
      </Head> */}
      <Header />
      <main className='m-10 md:m-16'>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
