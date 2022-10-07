import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Food ordering app</title>
        <meta name="description" content="Food ordering app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=''>
        <Navbar />
      </header>
      <main className=''>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
