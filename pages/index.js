import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/navbar";
import About from "../components/about";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greyson Stalcup - Web Developer</title>
        <meta property="og:title" content="Greyson Stalcup" key="title" />
      </Head>

      <main>
        <section className="min-h-screen">
          {/* <Navbar /> */}

          <div className="max-h-4">
            <Hero />
          </div>
        </section>
      </main>
    </div>
  );
}
