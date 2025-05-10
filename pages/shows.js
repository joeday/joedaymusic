import Show from "../components/Show";
import styles from "./shows.module.css";
import Layout from "../components/layout";
import shows from "../data/shows";
import Head from "next/head";
import SubscribeForm from "../components/SubscribeForm";
import { useEffect, useState } from "react";

const HIDE_SUBSCRIBER_MODAL_KEY = "hide-subscription-modal";

const getIsModalHidden = () =>
  localStorage.getItem(HIDE_SUBSCRIBER_MODAL_KEY) === "true";
const hideModal = () => localStorage.setItem(HIDE_SUBSCRIBER_MODAL_KEY, "true");

export const getStaticProps = async () => {
  return {
    props: {
      shows,
    },
  };
};

export default function Shows(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!getIsModalHidden()) {
        setShowModal(true);
      }
    }, 1_000 * 3);
  }, []);

  useEffect(() => {
    const bindKey = ({ key }) => {
      if (key === "Escape") {
        dismissFormModal();
      }
    };
    window.addEventListener("keyup", bindKey);
    return () => {
      window.removeEventListener("keyup", bindKey);
    };
  }, []);

  function dismissFormModal() {
    setShowModal(false);
    hideModal();
  }

  return (
    <Layout home>
      <Head>
        <meta
          property="og:title"
          content="Joe Day & the Coyotes Live"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Get tickets while they last"
          key="ogdescription"
        />
        <meta property="og:image" content="/JD+CoyotesLive.jpg" key="ogimage" />
        <meta
          property="og:url"
          content="https://joeday.music/shows"
          key="ogurl"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.showsGrid}>
        <h1 className={styles.articleTitle}>Upcoming shows</h1>
        <h1>{props.greeting}</h1>
        <section className={styles.shows}>
          <ul className={styles.upcomingShowsList}>
            {props.shows.length != 0
              ? props.shows.map((showInfo) => (
                  <Show {...showInfo} key={showInfo.id} />
                ))
              : "Nothing scheduled at the moment"}
          </ul>

          <section className={styles.booking}>
            <p className={styles.divider}>+ + +</p>
            <p className={styles.bookingCopy}>
              For booking, email:{" "}
              <a
                className={styles.emailLink}
                href="mailto:booking@joedaymusic.com"
              >
                booking@joedaymusic.com
              </a>
            </p>
            <p className={styles.divider}>+ + +</p>
          </section>
        </section>
        <div
          className={styles.formModal}
          style={showModal ? {} : { display: "none" }}
        >
          <button className={styles.dismissButton} onClick={dismissFormModal}>
            X
          </button>
          <h3>Never miss a show. Join the Halflight Dispatch.</h3>
          <ul>
            <li>Exclusive merch</li>
            <li>Monthly updates on the new album</li>
            <li>Song stories</li>
            <li>Playlists</li>
          </ul>
          <p>
            The Halflight Dispatch is Joe Day's email newsletter and the best
            way to stay in the loop. Show & tour announcements, exclusive merch,
            song stories, and more delivered directly to your inbox.
          </p>
          <SubscribeForm afterSubmit={dismissFormModal} />
        </div>
      </div>
    </Layout>
  );
}
