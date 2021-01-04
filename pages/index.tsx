// Next
import Head from 'next/head';

// React
import { useEffect } from 'react';

// Components
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';

// Constants
import { HEADER } from '../constants/general';

const Home = () => {
  const isServer = typeof window === 'undefined';
  const AOS = !isServer ? require('aos') : null;

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{HEADER}</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col flex-wrap justify-center content-center text-center">
        <div className="flex flex-1 flex-col flex-wrap mb-16">
          <Header />
          <div className="flex justify-center">
            <img src="/static/MikeEnMonika.jpg"></img>
          </div>
        </div>

        <div>
          <Introduction />
        </div>

        <div>
          <ImageGallery />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
