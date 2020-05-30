// Next
import Head from 'next/head';

// CSS
import './styles.global.scss';
import styles from './index.scss';

// Components
import Header from './components/Header';
import Introduction from './components/Introduction';
import ExpandableBox from './components/ExpandableBox';

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
} from './constants/general';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{HEADER}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Header />
        <Introduction />
        <div className={styles.expandableContainer}>
          <div className={styles.expandable}>
            <ExpandableBox title={DAILY_PROGRAM_TITLE} text={DAILY_PROGRAM_TEXT} />
          </div>
          <div className={styles.expandable}>
            <ExpandableBox title={NIGHTLY_PROGRAM_TITLE} text={NIGHTLY_PROGRAM_TEXT} />
          </div>
          <div className={styles.expandable}>
            <ExpandableBox title={WEDDING_LOCATION_TITLE} text={WEDDING_LOCATION_TEXT} />
          </div>
          <div className={styles.expandable}>
            <ExpandableBox title={EXTRA_INFORMATION_TITLE} text={EXTRA_INFORMATION_TEXT} />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
