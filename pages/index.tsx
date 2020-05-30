// Next
import Head from 'next/head';

// CSS
import styles from './index.scss';
import './styles.global.scss';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Bruiloft Mike & Monika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Bruiloft Mike & Monika</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
