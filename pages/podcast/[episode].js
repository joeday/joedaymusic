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
  // const episideIDs = episodes.map((episode) => {
  //   return episode.id;
  // });
  // const episodePaths = createDynamicRoutesFromStrings(episideIDs);

  // return {
  //   paths: episodePaths,
  //   fallback: false,
  // };
}

export async function getStaticProps({ params }) {
  const episodeData = await getPostData(params.episode);
  return {
    props: {
      episodeData,
    },
  };
  // const episodeData = episodes.find((episode) => episode.id === params.episode);
  // return {
  //   props: {
  //     title: episodeData ? episodeData.title : null,
  //     data: episodeData ? episodeData.data : null,
  //   },
  // };
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
            height="1920"
            width="1080"
            alt={episodeData.guest}
          />
        </div>
      </section>
    </Layout>
  );
}
