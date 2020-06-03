// Next
import Head from 'next/head';

// React
import { useState } from 'react';

// CSS
import './styles.global.scss';
import styles from './index.scss';

// Components
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';

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

  return (
    <div className={styles.container}>
      <Head>
        <title>{HEADER}</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <NavigationBar title={HOME} />
        <Header />
        <Introduction />
        <div className={styles.expandableContainer}>
          <span
            className={styles.menuSelector}
            onClick={() => {
              changeText(DAILY_PROGRAM_TEXT);
            }}
          >
            {DAILY_PROGRAM_TITLE}
          </span>
          <span
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
          </span>

          {expandableText && (
            <div className={styles.expandableText} dangerouslySetInnerHTML={{ __html: expandableText }} />
          )}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
