import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bruiloft Mike & Monika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Bruiloft Mike & Monika
        </h1>
      </main>

      <footer>
      </footer>

      <style jsx>{`
      .title {
        text-align: center;
      }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
