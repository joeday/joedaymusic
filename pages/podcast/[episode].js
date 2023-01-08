import Layout from "../../components/layout";
import Image from "next/image";
import styles from "./episode.module.css";
import { getAllPostIds, getPostData } from "../../utilities/episodes";

export async function getStaticPaths() {
  const episodes = getAllPostIds();

  return {
    paths: episodes,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const episodeData = await getPostData(params.episode);
  return {
    props: {
      episodeData,
    },
  };
}

export default function EpisodePage({ episodeData }) {
  return (
    <Layout>
      <section className={styles.episodePageWrapper}>
        <h1>{episodeData.title}</h1>
        <div className={styles.episodeContent}>
          <div
            className={styles.episodeText}
            dangerouslySetInnerHTML={{ __html: episodeData.contentHtml }}
          />
          <Image
            src={episodeData.imageTall}
            className={styles.episodeImage}
            height={1920}
            width={1080}
            alt={episodeData.guest}
          />
        </div>
      </section>
    </Layout>
  );
}
