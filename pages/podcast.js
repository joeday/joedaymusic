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
            A podcast about loneliness, hope, losing faith, relationships,
            writer’s block, finding faith, evangelicalism, Mars Hill Church,
            certainty, redemption, doubt, church trauma, healing, fear, wonder,
            surprise, love, creativity, disappointment, prayer, and longing.
            It's a podcast about how the album&nbsp;<em>Halflight</em> was made.
          </p>
          <p>
            The Halflight Podcast is available everywhere you listen to
            podcasts.
          </p>
          <div className={styles.episodeGrid}>
            {props.episodes.length != 0
              ? props.episodes.map((episode) =>
                  episode.published ? (
                    <Episode {...episode} key={episode.id} />
                  ) : null
                )
              : "Nothing scheduled at the moment"}
          </div>
        </section>
      </article>
    </Layout>
  );
}
