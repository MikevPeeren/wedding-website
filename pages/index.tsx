// Next
import Head from 'next/head';

// React
import { useState, useEffect, useRef } from 'react';

// CSS
import './styles.global.scss';
import styles from './index.scss';

// Components
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import Availability from './components/Availablility';
import DailyProgram from './components/content/DailyProgram';
import NightlyProgram from './components/content/NightlyProgram';
import WeddingLocation from './components/content/WeddingLocation';
import ExtraInformation from './components/content/ExtraInformation';

// Constants
import { HEADER, COPYRIGHT_TEXT } from '../constants/general';

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
        <div className={styles.container__header}>
          <Header />
          <div>
            <img className={styles.container__image} src="/static/bellethinking.jpg"></img>
          </div>
        </div>

        <div className={styles.container__introduction}>
          <Introduction />
          <Availability />
        </div>

        <div className={styles.container__content}>
          <div className={styles.container__dailyProgramImageContainer}>
            <figure className={styles.container__dailyProgramImageContainer__figure}>
              <img className={styles.container__dailyProgramImageContainer__image} src="/static/mrmrs.jpg"></img>
              <figcaption>
                <a
                  className={styles.container__content__copyright}
                  href="https://kloosternieuwkerkgoirle.nl"
                  target="_blank"
                >
                  {COPYRIGHT_TEXT}
                </a>
              </figcaption>
            </figure>
          </div>
          <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="800" data-aos-easing="linear">
            <DailyProgram />
          </div>

          <div className={styles.container__nightlyProgramImageContainer}>
            <figure className={styles.container__nightlyProgramImageContainer__figure}>
              <img src="/static/feestenborrel.jpg"></img>
              <figcaption>
                <a
                  className={styles.container__content__copyright}
                  href="https://kloosternieuwkerkgoirle.nl"
                  target="_blank"
                >
                  {COPYRIGHT_TEXT}
                </a>
              </figcaption>
            </figure>
          </div>
          <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="800" data-aos-easing="linear">
            <NightlyProgram />
          </div>

          <div className={styles.container__weddingLocationImageContainer}>
            <figure className={styles.container__weddingLocationImageContainer__figure}>
              <img
                className={styles.container__weddingLocationImageContainer__image}
                src="/static/kloosternieuwkerk.jpg"
              ></img>
              <figcaption>
                <a
                  className={styles.container__content__copyright}
                  href="https://kloosternieuwkerkgoirle.nl"
                  target="_blank"
                >
                  {COPYRIGHT_TEXT}
                </a>
              </figcaption>
            </figure>
          </div>
          <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="800" data-aos-easing="linear">
            <WeddingLocation />
          </div>

          <div className={styles.container__nightlyProgramImage}>
            <img src="/static/butterfly.jpg"></img>
          </div>
          <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="800" data-aos-easing="linear">
            <ExtraInformation />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
