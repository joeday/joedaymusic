import Layout from "../components/layout";
import styles from "./supportwilderness.module.css";
import Head from "next/head";

export default function Music() {
  return (
    <Layout home>
      <Head>
        <meta name="robots" content="noindex" />
        <meta
          property="og:title"
          content="An important message from Joe Day"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="About his upcoming third solo album"
          key="ogdescription"
        />
        <meta property="og:image" content="/wildernessOG.jpg" key="ogimage" />
        <meta
          property="og:url"
          content="https://joedaymusic.com/supportwilderness"
          key="ogurl"
        />
        <meta property="og:type" content="website" />
      </Head>
      <article className={styles.supportWildernessGrid}>
        <h1 className={styles.supportWildernessTitle}>
          Support Joe Day's new album
        </h1>
        <section className={styles.supportWildernessBody}>
          <caption className={styles.caption}>
            Pssst! This is a private page only a few people received the link
            to. If you wish to share with a friend directly, go ahead. Please do
            not share on social media.
          </caption>
          <p>
            <em>If you're here</em>, you're someone who has supported me and/or
            my music in a particular way over the years. My next album is
            written, now it's time to make it. That's where you come in...
          </p>
          <h3>Start here:</h3>
          <div className={styles.iframeContainer}>
            <iframe
              className={styles.responsiveIframe}
              src="https://www.youtube.com/embed/eF7ha0_Pb_Q?si=eB4klqeyIy9UJ1VA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <h4>To Support Joe's new Album...</h4>
          <p className={styles.noMarginTop}>
            First off, thank you! We'll keep it easy and informal. I know in the
            video I said "<em>click the link and follow the prompts</em>", but
            this will be simpler.{" "}
            <a href="mailto:joe@joedaymusic.com">Just shoot me an email</a> and
            let me know how much you'd like to donate.
          </p>
          <h4 className={styles.supportWildernessH4}>
            Watch: Joe plays Blood Moon from Wilderness
          </h4>
          <div className={styles.iframeContainer}>
            <iframe
              className={styles.responsiveIframe}
              src="https://www.youtube.com/embed/jVxDmBX8cag?si=SCrmCFIc_wXYstYe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </article>
    </Layout>
  );
}
