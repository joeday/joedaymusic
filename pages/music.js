import Image from "next/image";
import Layout from "../components/layout";
import styles from "./music.module.css";


export default function Music() {
  return (
    <Layout home>
        <article className={styles.musicGrid}>
            <h1 className={styles.musicTitle}>Solo albums: 2010–present</h1>
            <section className={styles.musicBody}>
                <div className={styles.album}>
                  <Image
                      priority
                      src="/images/albumcovers/Halflight.jpg"
                      alt={
                      "The cover art for Joe Day's 2021 album 'Halflight'"
                      }
                      width="900"
                      height="900"
                  />
                  <div className={styles.albumDescription}>
                   <h3 className={styles.albumTitle}>Halflight - 2021</h3>
                    <p>A soundtrack of disillusionment, grappling with the demise of the church he spent over a decade in as a worship pastor.</p>
                        <a
                      href="https://tidal.com/browse/album/184054030?u"
                      target="_blank"
                    >
                      Listen to Halflight
                    </a>
                  </div>
                </div>

                <div className={styles.album}>
                  <Image
                      priority
                      src="/images/albumcovers/FearAndLoveEP.jpg"
                      alt={
                      "The cover art for Joe Day's 2023 EP 'The Fear and Love EP'"
                      }
                      width="900"
                      height="900"
                  />
                  <div className={styles.albumDescription}>
                   <h3 className={styles.albumTitle}>The Fear and Love EP - 2023</h3>
                    <p className={styles.albumDescription}>Released in conjunction with the Halflight Podcast, the Fear and Love EP gives a glimpse into the evolution of a song over many years.</p>
                        <a
                      href="https://tidal.com/browse/album/269004662?u"
                      target="_blank"
                    >
                      Listen to the Fear and Love EP
                    </a>
                  </div>
                </div>

                <div className={styles.album}>
                  <Image
                      priority
                      src="/images/albumcovers/Grace.jpg"
                      alt={
                      "The cover art for Joe Day's 2010 album 'Grace'"
                      }
                      width="900"
                      height="900"
                  />
                  <div className={styles.albumDescription}>
                   <h3 className={styles.albumTitle}>Grace - 2010</h3>
                    <p className={styles.albumDescription}>
                      “I don’t think anyone has made a corporate worship album quite like Grace. It’s a PNW indie-rock album with smart, theologically rich lyrics.” 

                      <br />-John Van Deusen
                    </p>
                        <a
                      href="https://tidal.com/browse/album/21112745?u"
                      target="_blank"
                    >
                      Listen to Grace
                    </a>
                  </div>
                </div>
            </section>
        </article>
    </Layout>
  );
}