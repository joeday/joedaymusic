import Image from "next/image";
import styles from "./index.module.css";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="The Halflight Podcast" />
        <meta
          property="og:description"
          content="First episodes drop January 10th. Subscribe now wherever you get your podcasts"
        />
        <meta property="og:image" content="/halflight_podcast.png" />
        <meta property="og:url" content="https://joedaymusic.com/podcast" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout home>
        <div className={styles.homeGrid}>
          <h1 className={styles.headline}>
            Streaming everywhere <span className="noBreak">January 10</span>
          </h1>
          <section className={styles.homeContent}>
            <div className={styles.homePageColumn}>
              <Link href="/podcast" className={styles.headlineImg}>
                <Image
                  priority
                  src="/images/podcast/CoverLarge.png"
                  className={styles.responsiveImage}
                  width="852"
                  height="852"
                  alt="Cover art for The Halflight Podcast - out January 10th"
                />
              </Link>
              <h2 className="subHeading">The Halflight Podcast</h2>
              <p className={styles.description}>
                Each episode a different guest joins Joe to talk about one song
                from the album. It’s the audio liner notes to <em>Halflight</em>
                , and it’s way more than that. It’s a podcast about creativity,
                loneliness, hope, losing faith, relationships, writer’s block,
                finding faith, evangelicalism, Mars Hill Church, certainty,
                doubt, church trauma, healing, wonder, surprise, disappointment,
                prayer, longing; about making the album <em>Halflight</em>.
                <br />
                <br />
                Subscribe now wherever you listen to podcasts.
              </p>
            </div>
            <div className={styles.homePageColumn}>
              <Image
                priority
                src="/images/podcast/FearAndLoveEPLarge.png"
                className={styles.responsiveImage}
                width="852"
                height="852"
                alt="Album cover for Joe Day's Fear and Love EP"
              />
              <h2 className="subHeading">The Fear and Love EP</h2>
              <p className={styles.description}>
                Fear and Love (alternate version) is a brand new version of the
                song we made to commemorate the release of{" "}
                <em>The Halflight Podcast</em>. In the Fear and Love episode,
                Brent James Driscoll (creator & producer of the Emmy winning{" "}
                <a href="https://sessionsinplace.com/" target="_blank">
                  Sessions In Place
                </a>
                ) talk about the original demo from 2017 and how different it is
                from the album version. The Fear and Love EP chronicles the
                evolution of one of the most important songs on{" "}
                <em>Halflight</em>. If you were jonesing for some 90s angst,
                you’re going to be really, really happy.
              </p>
              <h4 className={styles.listenLinksHeader}>Listen now</h4>
              <ul className={styles.listenLinks}>
                <li>
                  <a href="https://joeday.bandcamp.com" target="_blank">
                    Bandcamp
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/album/1dsQeSvxSr9KQ5jL4zwRHy?si=HIi2hkuaRlq1EBbCveoI_w"
                    target="_blank"
                  >
                    Spotify
                  </a>
                </li>
                <li>
                  <a
                    href="https://music.apple.com/us/album/fear-and-love-ep/1661922586"
                    target="_blank"
                  >
                    Apple Music
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
