import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Hello, We are <span className={styles.name}>VERSCE</span></h1>
      </div>
    </main>
  )
}
