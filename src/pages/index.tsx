
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.thirteen}>
          <h2 className={inter.className}>Coming soon</h2>
        </div>
      </div>

      <div className={styles.grid}>
        <Link href="/areas/library" className={styles.card}>
          <h2 className={inter.className}>
            Library <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Link>
        <Link href="/areas/cafeteria" className={styles.card}>
          <h2 className={inter.className}>
            Cafeteria <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Link>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Learn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>
      </div>
    </>
  )
}
