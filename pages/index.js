import Image from "next/image";
import styles from "./index.module.css";
import Layout from "../components/layout";
import SubscribeForm from "../components/SubscribeForm";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <div className={styles.homeGrid}>
        <h1 className={styles.headline}>Streaming everywhere now</h1>
        <section className={styles.homeContent}>
          <div className={styles.homePageColumn}>
            <Image
              priority
              src="/images/joeday-halflight-final-digital-xs.jpg"
              className={styles.responsiveImage}
              width="852"
              height="852"
              alt="Album cover for Joe Day's album Halflight"
            />
            <h2 className="subHeading">Halflight</h2>
            <p className={styles.description}>
              Joe Day's 2021 album <em>Halflight</em> is a soundtrack for people
              living in the dissonance of being ushered into a post-fact world
              by the very people and institutions that told them truth matters.
              These songs seek to let people know they’re not alone, they’re
              seen. That it's possible to move towards wholeness and hope.
            </p>
            <h4 className={styles.listenLinksHeader}>Listen now</h4>
            <ul className={styles.listenLinks}>
              <li>
                <a
                  href="https://tidal.com/browse/album/184054030?u"
                  target="_blank"
                >
                  Tidal
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/album/4s1HcvF8Dp5WLVnb1D2lFk?si=Cemb0J1-Qb-X0eTi3gW1uQ"
                  target="_blank"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://music.apple.com/us/album/halflight/1567350278"
                  target="_blank"
                >
                  Apple Music
                </a>
              </li>
              <li>
                <a href="https://joeday.bandcamp.com" target="_blank">
                  Bandcamp
                </a>
              </li>
            </ul>
          </div>
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
              from the album. It’s the audio liner notes to <em>Halflight</em>,
              and it’s way more than that. It’s a podcast about creativity,
              loneliness, hope, losing faith, relationships, writer’s block,
              finding faith, evangelicalism, certainty, doubt, church trauma,
              healing, wonder, surprise, disappointment, prayer, longing; about
              making the album <em>Halflight</em>.
              <br />
              <br />
              Subscribe now wherever you listen to podcasts.
            </p>
          </div>
        </section>
        <div className={styles.formModal}>
          <h3>Subscribe to the Halflight Dispatch</h3>
          <ul>
            <li>Exclusive merch</li>
            <li>Monthly updates on the new album</li>
            <li>Song stories</li>
            <li>Playlists</li>
          </ul>
          <p>
            The Halflight Dispatch is my monthly newsletter. Why a newsletter?
            Well, today social media companies make it very difficult for
            artists to reach the people who follow them. Good old fashioned
            email is the best way to stay in the loop. And I make it fun too.
          </p>
          <SubscribeForm />
        </div>
      </div>
    </Layout>
  );
}
