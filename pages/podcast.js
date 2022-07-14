import Layout from "../components/layout";
import styles from "./podcast.module.css";
import episodes from "../data/episodes";
import Episode from "../components/Episode";

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
            The Halflight Podcast is the audio liner notes for the album. I
            wanted a way to share more of the story of the album through the
            lens of the lyrics and through the eyes of others. In each episode,
            me and my guest talk through a song and follow the conversation
            where it goes. Join me on this 12 week journey going deeper into the
            story of Halflight.
          </p>
          {props.episodes.length != 0
            ? props.episodes.map((episode) =>
                episode.published ? (
                  <Episode {...episode} key={episode.id} />
                ) : null
              )
            : "Nothing scheduled at the moment"}
        </section>
      </article>
    </Layout>
  );
}
