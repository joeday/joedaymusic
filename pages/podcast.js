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
            writer’s block, finding faith, evangelicalism, mars hill church,
            certainty, doubt, church trauma, healing, wonder, surprise,
            creativity, disappointment, prayer, longing; about making the album
            Halflight.
          </p>
          <p>
            The Halflight Podcast is available everywhere you listen to
            podcasts.
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
