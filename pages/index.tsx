// Next
import Head from 'next/head';

// CSS
import './styles.global.scss';
import styles from './index.scss';

// Components
import Header from './components/Header';
import Introduction from './components/Introduction';

// Constants
import { HEADER } from './constants/general';

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
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
