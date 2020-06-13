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
import DailyProgram from './components/DailyProgram';

// Constants
import {
  HEADER,
  DAILY_PROGRAM_TITLE,
  DAILY_PROGRAM_TEXT,
  NIGHTLY_PROGRAM_TITLE,
  NIGHTLY_PROGRAM_TEXT,
  WEDDING_LOCATION_TITLE,
  WEDDING_LOCATION_TEXT,
  EXTRA_INFORMATION_TITLE,
  EXTRA_INFORMATION_TEXT,
  HOME,
} from '../constants/general';

const Home = () => {
  const [expandableText, setExpandableText] = useState('');

  const changeText = (expandableText) => {
    setExpandableText(expandableText);
  };

  const isServer = typeof window === 'undefined';
  const WOW = !isServer ? require('wowjs') : null;

  useEffect(() => {
    //@ts-ignore
    window.wow = new WOW.WOW({
      live: false,
    });

    //@ts-ignore
    window.wow.init();
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>{HEADER}</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
      </Head>

      <main className={styles.container__main}>
        <NavigationBar title={HOME} />
        <Header />
        <div className={styles.container__imageDiv}>
          <img className={styles.container__image} src="/static/bellethinking.jpg"></img>
        </div>
        <Introduction />
        <Availability />
        <img className={styles.container__dailyProgramImage} src="/static/mr&mrs.jpg"></img>

        <div className="wow fadeInLeft animate__delay-5s">
          <DailyProgram />
        </div>
        {/* <div
          className={`wow fadeInLeft animate__delay-5s ${styles.container__dailyProgramText}`}
          dangerouslySetInnerHTML={{ __html: DAILY_PROGRAM_TEXT }}
        /> */}
        {/* <div className={`wow fadeInLeft animate__delay-2s ${styles.expandableContainer}`}> */}
        {/* <span
            className={styles.menuSelector}
            onClick={() => {
              changeText(DAILY_PROGRAM_TEXT);
            }}
          >
            {DAILY_PROGRAM_TITLE}
          </span> */}
        {/* <span
            className={styles.menuSelector}
            onClick={() => {
              changeText(NIGHTLY_PROGRAM_TEXT);
            }}
          >
            {NIGHTLY_PROGRAM_TITLE}
          </span>
          <span
            className={styles.menuSelector}
            onClick={() => {
              changeText(WEDDING_LOCATION_TEXT);
            }}
          >
            {WEDDING_LOCATION_TITLE}
          </span>
          <span
            className={styles.menuSelector}
            onClick={() => {
              changeText(EXTRA_INFORMATION_TEXT);
            }}
          >
            {EXTRA_INFORMATION_TITLE}
          </span> */}
        {/* </div> */}

        {/* {expandableText && (
          <div className={styles.expandableContainer}>
            <div className={styles.expandableText} dangerouslySetInnerHTML={{ __html: expandableText }} />
          </div>
        )} */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
