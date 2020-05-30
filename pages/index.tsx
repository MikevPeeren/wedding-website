// Next
import Head from 'next/head';

// CSS
import './styles.global.scss';

// Components
import Header from './components/Header';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Bruiloft Mike & Monika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
