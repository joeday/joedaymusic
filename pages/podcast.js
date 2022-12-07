import Layout from "../components/layout";
import styles from "./podcast.module.css";
import episodes from "../data/episodes";
import Episode from "../components/Episode";
import Image from "next/image";
import { getByTitle } from "@testing-library/react";

export const getStaticProps = async () => {
  return {
    props: {
      episodes,
    },
  };
};

export default function Podcast(props) {
  return (
    <Layout home>
      <article className={styles.podcastGrid}>
        <h1 className={styles.articleTitle}>The Halflight Podcast</h1>
        <section className={styles.overview}>
          <p>
            A podcast about loneliness, hope, losing faith, relationships,
            writer’s block, finding faith, evangelicalism, Mars Hill Church,
            certainty, redemption, doubt, church trauma, healing, fear, wonder,
            surprise, love, creativity, disappointment, prayer, and longing.
            It's a podcast about how the album&nbsp;<em>Halflight</em> was made.
          </p>
          <p className={styles.subscribeNow}>Subscribe now</p>
          <div className={styles.podcastLinks}>
            <a
              className={styles.podcastLink}
              href="https://open.spotify.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                priority
                src="/images/Spotify_logo_without_text_white.svg"
                alt="Spotify"
                height="64"
                width="64"
                layout="raw"
              />
            </a>
            <a
              className={styles.podcastLink}
              href="https://music.apple.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                priority
                src="/images/ApplePodcastsWhite.svg"
                alt="Apple Music"
                height="64"
                width="64"
                layout="raw"
              />
            </a>
            <a
              className={styles.podcastLink}
              href="https://podcasts.google.com"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                priority
                src="/images/Google_Podcasts_White.svg"
                alt="Google"
                height="64"
                width="64"
                layout="raw"
              />
            </a>
          </div>
          <p className={styles.podcastLinksText}>
            ...wherever you listen to podcasts
          </p>
          <div className={styles.episodeGrid}>
            {props.episodes.length != 0
              ? props.episodes.map((episode) =>
                  episode.data.published ? (
                    <Episode
                      title={episode.title}
                      id={episode.id}
                      num={episode.number}
                      {...episode.data}
                      key={episode.id}
                    />
                  ) : null
                )
              : "Nothing scheduled at the moment"}
          </div>
        </section>
      </article>
    </Layout>
  );
}
