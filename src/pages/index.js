import Head from 'next/head'
import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Hertz Innovation - Coming Soon</title>
        <meta name="description" content="Hertz Innovation is launching soon!" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Hertz Innovation</h1>
          <p>Innovation. Creativity. Tomorrow.</p>
        </div>
        <div className={styles.comingSoon}>
          <h2>Something Big is Coming</h2>
          <p>Stay tuned for the future of innovation.</p>

          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/hertzinnovation?igsh=bmxoMDMxb3VkeWs3" target='blank' className={styles.socialIcon}>Instagram</a>
            <a href="https://www.facebook.com/people/Hertz-Innovation/100077932734294/" className={styles.socialIcon}>Facebook</a>
          </div>
        </div>
      </header>

      <footer className={styles.footer}>
        <p>© 2025 Hertz Innovation. All Rights Reserved.</p>
      </footer>
    </div>
  );
}