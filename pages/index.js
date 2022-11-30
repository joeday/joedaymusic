import Image from "next/image";
import styles from "./index.module.css";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Get Halflight on Vinyl Today" />
        <meta property="og:description" content="Available now" />
        <meta property="og:image" content="/HalflightVinylMockup.jpg" />
        <meta property="og:url" content="https://joedaymusic.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout home>
        <div className={styles.homeGrid}>
          <section className={styles.homeContent}>
            <Link href="/podcast">
              <a className={styles.headlineImg}>
                <Image
                  priority
                  src="/images/podcast/the-halflight-podcast-handwriting.png"
                  className={styles.responsiveImage}
                  width="625"
                  height="570"
                  layout="raw"
                  alt="Album cover for Joe Day's full length album 'Halflight'"
                />
              </a>
            </Link>
            <div className={styles.headlineBlocks}>
              <p className={styles.headlineBlock2}>
                Coming January 01, 2023. Subscribe wherever you get your
                podcasts today!
              </p>
              <p className={styles.headlineBlock2}>
                A podcast about loneliness, hope, losing faith, relationships,
                writer’s block, finding faith, evangelicalism, Mars Hill Church,
                certainty, doubt, church trauma, healing, wonder, surprise,
                creativity, disappointment, prayer, longing; about making the
                album Halflight.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
