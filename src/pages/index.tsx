import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Theos Vagas</title>
        <meta name="description" content="Theos Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Banner />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
