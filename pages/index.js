import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getRecipeData} from '../lib/recipes';

export async function getStaticProps() {
  const allRecipesData = getRecipeData()
  return {
    props: {
      allRecipesData
    }
  }
}

export default function Home({allRecipesData}) {
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
        <h1>Recipes</h1>
        <ul>
          {allRecipesData.map(({id, title}) => (
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
