import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getRecipieData} from '../lib/recipies';

export async function getStaticProps() {
  const allRecipiesData = getRecipieData()
  return {
    props: {
      allRecipiesData
    }
  }
}

export default function Home({allRecipiesData}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mix It Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mix It Up!
        </h1>
      </main>

      <section>
        <h1>Recipies</h1>
        <ul>
          {allRecipiesData.map(({id, title}) => (
            <li key={id}>
              {title}
              <br/>
              {id}
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        Powered by 404Technologies
      </footer>
    </div>
  )
}
