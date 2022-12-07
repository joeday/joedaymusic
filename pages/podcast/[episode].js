import Layout from "../../components/layout";
import Image from "next/image";
import episodes from "../../data/episodes";
import styles from "./episode.module.css";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { episode: "blue-skies" },
      },
      { params: { episode: "halflight" } },
      { params: { episode: "fear-and-love" } },
      { params: { episode: "all-i-want-is-home" } },
      { params: { episode: "the-prayer-of-saint-francis" } },
      { params: { episode: "when-will-my-day-come" } },
      { params: { episode: "dont-let-the-fear-capture-your-heart" } },
      { params: { episode: "a-better-love" } },
      { params: { episode: "return-my-heart-to-my-chest" } },
      { params: { episode: "benediction-for-the-broken" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const episodeData = episodes.find((episode) => episode.id === params.episode);
  return {
    props: {
      title: episodeData ? episodeData.title : null,
      data: episodeData ? episodeData.data : null,
    },
  };
}

export default function EpisodePage({ title, data }) {
  return (
    <Layout>
      <section className={styles.episodePageWrapper}>
        <h1>{title}</h1>
        <div className={styles.episodeContent}>
          <div className={styles.episodeText}>
            <p>{data.description}</p>
            <h4 className={styles.episodeLinksHeader}>Episode links</h4>
            <ul className={styles.episodeLinks}>
              {data.links.length != 0
                ? data.links.map((link) => (
                    <li>
                      {link.name}{" "}
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))
                : "Blah"}
            </ul>
          </div>
          <Image
            src={data.imageTall}
            className={styles.episodeImage}
            height="1920"
            width="1080"
            layout="raw"
            alt={data.guest}
          />
        </div>
      </section>
    </Layout>
  );
}
