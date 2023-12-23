import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Script from 'next/script'

import Link from 'next/link'

export default function Home() {
return(
  
  <div className={styles.container}>
  <Head>
    <title> coderunner </title>
    
  </Head>
  <nav className={styles.mainnav}>
        <ul>
          
          <Link href='/home'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>

  <main className={styles.main}>
    <h1 className={styles.title}>
    coderunner 
  <p className={styles.description}>
    
    </p>
    </h1>
    </main>
</div>

        )
        }


