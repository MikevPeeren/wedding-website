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
import { HEADER, DAILY_PROGRAM, NIGHTLY_PROGRAM, WEDDING_LOCATION, EXTRA_INFORMATION } from './constants/general';

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
            <ExpandableBox title={DAILY_PROGRAM} />
          </div>
          <div className={styles.expandable}>
            <ExpandableBox title={NIGHTLY_PROGRAM} />
          </div>
          <div className={styles.expandable}>
            <ExpandableBox title={WEDDING_LOCATION} />
          </div>
          <div className={styles.expandable}>
            <ExpandableBox title={EXTRA_INFORMATION} />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
