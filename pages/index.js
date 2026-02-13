import Image from "next/image";
import styles from "./index.module.css";
import Layout from "../components/layout";
import SubscribeForm from "../components/SubscribeForm";
import Link from "next/link";
import { useEffect, useState } from "react";

const HIDE_SUBSCRIBER_MODAL_KEY = "hide-subscription-modal";

const getIsModalHidden = () =>
  localStorage.getItem(HIDE_SUBSCRIBER_MODAL_KEY) === "true";
const hideModal = () => localStorage.setItem(HIDE_SUBSCRIBER_MODAL_KEY, "true");

export default function Home() {
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
      <div className={styles.homeGrid}>
        <h1 className={styles.headline}>Grace 15 year anniversary show</h1>
        <Link
          href="https://app.tickettailor.com/events/joedaymusic/2054888"
          className={styles.headlineImg}
          rel="nofollow"
          target="_blank"
        >
          <Image
            priority
            src="/images/graceFB.jpg"
            className={styles.responsiveImage}
            width="900"
            height="473"
            alt="A horizontal concert poster image promoting Joe's upcoming Grace 15-year anniversary show with John Van Deusen and Micah Kelley"
          />
        </Link>
        <p>
          Over the last few months,{" "}
          <a
            href="https://newsletter.joedaymusic.com/archive/grace-an-introduction/"
            rel="nofollow"
            target="_blank"
          >
            the story of Joe Day's album Grace has been told
          </a>{" "}
          to commemorate its 15th anniversary—a reflection on the community, the
          people, and the songs that defined an era in Mount Vernon, Seattle,
          and more. Now, it’s time to hear those songs in the very place where
          they were born.
        </p>
        <p>
          On <b>August 7th</b>, we are returning to <b>Communion Church</b> (the
          space many remember as <i>The Gathering</i>) for a celebration of this
          record and the community it represents.
          <b></b>
        </p>
        <p>
          The evening features a deep bench of longtime collaborators, beginning
          with a set by <b>John Van Deusen</b>
          <b>,&nbsp;</b>followed by <b>Micah Kelley</b> performing a selection
          of his songs from the era. Finally, <b>Joe Day</b> will take the stage
          with the original <b>Mindhead</b> lineup (
          <b>Seth Fikkert, Jeff Morrow, and Jono Orange</b>) along with{" "}
          <b>Audrey Stout</b> and <b>Craig & Jackie Marais.&nbsp;</b>
        </p>
        <p>
          This will be a night to remember.&nbsp;
          <a
            href="https://app.tickettailor.com/events/joedaymusic/2054888"
            rel="nofollow"
            target="_blank"
          >
            Get your tickets now!
          </a>
        </p>

        <h2 className={styles.subHeadline}>
          Help make Joe's new album <em>Wilderness</em>
        </h2>
        <Link href="/support-wilderness" className={styles.headlineImg}>
          <Image
            priority
            src="/images/help_make_wilderness_lg.jpg"
            className={styles.responsiveImage}
            width="900"
            height="473"
            alt="An image of Joe Day recording acoustic guitar in a hallway (which is an unusual place to do that) with the caption 'Help make Joe's new album Wilderness. An album about our longing for connection and transcendence.'"
          />
        </Link>
        <p>
          Joe's most ambitious musical project yet. The most songs, the most
          collaborators, a vision that was clear before a single song was
          written. You can help make it real!{" "}
          <a href="/support-wilderness">Find out all about it here.</a>
        </p>

        <div
          className={styles.formModal}
          style={showModal ? {} : { display: "none" }}
        >
          <button className={styles.dismissButton} onClick={dismissFormModal}>
            X
          </button>
          <h3>Subscribe to the Halflight Dispatch</h3>
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
