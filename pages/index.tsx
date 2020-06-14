// Next
import Head from 'next/head';

// React
import { useState, useEffect, useRef } from 'react';

// CSS
import './styles.global.scss';
import styles from './index.scss';

// Components
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import Availability from './components/Availablility';
import DailyProgram from './components/content/DailyProgram';
import NightlyProgram from './components/content/NightlyProgram';
import WeddingLocation from './components/content/WeddingLocation';

// Constants
import { HEADER, EXTRA_INFORMATION_TITLE, EXTRA_INFORMATION_TEXT, HOME } from '../constants/general';

const Home = () => {
  const isServer = typeof window === 'undefined';
  const AOS = !isServer ? require('aos') : null;

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>{HEADER}</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>

      <main className={styles.container__main}>
        <NavigationBar title={HOME} />
        <div className={styles.container__header}>
          <Header />
          <div className={styles.container__imageDiv}>
            <img className={styles.container__image} src="/static/bellethinking.jpg"></img>
          </div>
        </div>

        <div className={styles.container__introduction}>
          <Introduction />
          <Availability />
        </div>

        <div className={styles.container__content}>
          <div>
            <img className={styles.container__dailyProgramImage} src="/static/mr&mrs.jpg"></img>
            <div data-aos="fade-right" data-aos-offset="500" data-aos-duration="800" data-aos-easing="linear">
              <DailyProgram />
            </div>
          </div>

          <div className={styles.container__nightlyProgramImage}>
            <img src="/static/feesten&borrel.jpg"></img>
          </div>
          <div data-aos="fade-left" data-aos-offset="500" data-aos-duration="800" data-aos-easing="linear">
            <NightlyProgram />
          </div>

          <div>
            <img className={styles.container__weddingLocationImage} src="/static/kloosternieuwkerk2.jpg"></img>
          </div>
          <div data-aos="fade-right" data-aos-offset="500" data-aos-duration="800" data-aos-easing="linear">
            <WeddingLocation />
          </div>
        </div>

        {/*
          <span
            className={styles.menuSelector}
            onClick={() => {
              changeText(EXTRA_INFORMATION_TEXT);
            }}
          >
            {EXTRA_INFORMATION_TITLE}
          </span> */}
        {/* </div> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
