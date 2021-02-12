import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
// import Nav from "./Nav";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="main-container">
      <Head>
        <title>{title} | Usman Sabuwala</title>
      </Head>
      <Header />
      {/* <Nav /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
