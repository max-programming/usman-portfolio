import Head from "next/head";
import Header from "./Header";
// import Nav from "./Nav";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {/* <Nav /> */}
      <main>{children}</main>
    </div>
  );
}
