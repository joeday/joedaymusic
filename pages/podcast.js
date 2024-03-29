import Layout from "../components/layout";
import styles from "./podcast.module.css";
import Episode from "../components/Episode";
import Image from "next/image";
import { getSortedPostsData } from "../utilities/episodes";

export async function getStaticProps() {
  const episodesData = getSortedPostsData();
  return {
    props: {
      episodesData,
    },
  };
}

export default function Podcast({ episodesData }) {
  return (
    <Layout home>
      <article className={styles.podcastGrid}>
        <h1 className={styles.articleTitle}>The Halflight Podcast</h1>
        <section className={styles.overview}>
          <p>
            <em>Halflight</em> has been a deeply meaningful album for those who
            have discovered it. While it's captured the imagination of folks
            from all over the faith spectrum, including folks who claim no
            faith, it is a story of looking for Christ outside of the confines
            of evangelicalism. I love that it's spoken to people in that way and
            I've always hoped this album would reach all the ears that need it.
            Thus <em>The Halflight Podcast</em> was born.
          </p>
          <p>
            Each episode a different guest joins me to talk about one song from
            the album. It’s the audio liner notes to <em>Halflight</em>, yet
            it’s way more than that. It’s a podcast about creativity,
            loneliness, hope, losing faith, relationships, writer’s block,
            finding faith, evangelicalism, Mars Hill Church, certainty, doubt,
            church trauma, healing, wonder, surprise, disappointment, prayer,
            longing; it's the story of making the album <em>Halflight</em>.
          </p>
          <p className={styles.subscribeNow}>Subscribe now</p>
          <div className={styles.podcastLinks}>
            <a
              className={styles.podcastLink}
              href="https://open.spotify.com/show/2K2vKoRk511U3okd970NkD"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                priority
                src="/images/Spotify_logo_without_text_white.svg"
                alt="Spotify"
                height="64"
                width="64"
              />
            </a>
            <a
              className={styles.podcastLink}
              href="https://podcasts.apple.com/us/podcast/the-halflight-podcast/id1661551029"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                priority
                src="/images/ApplePodcastsWhite.svg"
                alt="Apple Music"
                height="64"
                width="64"
              />
            </a>
            <a
              className={styles.podcastLink}
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hZDIzMmYyOC9wb2RjYXN0L3Jzcw"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                priority
                src="/images/Google_Podcasts_White.svg"
                alt="Google"
                height="64"
                width="64"
              />
            </a>
            <a
              className={styles.podcastLink}
              href="https://anchor.fm/s/ad232f28/podcast/rss"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                priority
                src="/images/RSSWhite.svg"
                alt="RSS feed link"
                height="64"
                width="64"
              />
            </a>
          </div>
          <p className={styles.podcastLinksText}>
            ...wherever you listen to podcasts
          </p>
          <div className={styles.episodeGrid}>
            {episodesData.map(
              ({
                title,
                date,
                slug,
                guest,
                image,
                imageTall,
                placeholder,
                id,
              }) => (
                <Episode
                  key={id}
                  title={title}
                  slug={slug}
                  num={id}
                  guest={guest}
                  releaseDate={date}
                  image={image}
                  imageTall={imageTall}
                  placeholder={placeholder}
                />
              )
            )}
          </div>
        </section>
      </article>
    </Layout>
  );
}
