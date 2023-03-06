import Head from 'next/head';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import Partners from '../components/Partners';

import { Client } from '../types/Client';
import api from '../services/api';

export default function Home({ clients }: any) {
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
        <Partners clients={clients} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<Client[]>('/api/clients/findAll');

  return {
    props: {
      clients: data,
    },
  };
};
