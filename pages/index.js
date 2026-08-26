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

        <h1 className={styles.headline}>
          Help make Joe's new album <em>Wilderness</em>
        </h1>
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
