import Image from 'next/image'
import styles from './index.module.css'
import Layout from '../components/layout'

export default function Home() {
  return ( 
    <Layout home>
      <div className={styles.homeGrid}>
        <section className={styles.homeContent}>
          <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank" className={styles.link}>
            <Image
              priority
              src="/images/VinylMockup-transparent.png"
              className={styles.responsiveImage}
              width="1200"
              height="630"
              layout="raw"
              alt="Album cover for Joe Day's full length album 'Halflight'"
            />
          </a>
          <div className={styles.headlineBlocks}>
            <p className={styles.headlineBlock2}>The new full-length album</p>
            <p className={styles.headlineBlock3}>Halflight</p>
            <p className={styles.headlineBlock4}>
              <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">Now at Bandcamp</a>
              &nbsp;+ Streaming everywhere
            </p>    
          </div>
              
        </section>
      </div>
    </Layout>
   );
}
 