import Layout from "../../components/layout";
import Image from "next/image";
import episodes from "../../data/episodes";
import styles from "./episode.module.css";
import { createDynamicRoutesFromStrings } from "../../utilities/routes";

export async function getStaticPaths() {
  const episideIDs = episodes.map((episode) => {
    return episode.id;
  });
  const episodePaths = createDynamicRoutesFromStrings(episideIDs);

  return {
    paths: episodePaths,
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
