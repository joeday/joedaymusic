import Layout from "../components/layout";
import SubscribeForm from "../components/SubscribeForm";
import styles from "./thehalflightdispatch.module.css";

export default function TheHalflightDispatch() {
  return (
    <Layout home>
      <article className={styles.contactGrid}>
        <h1 className={styles.articleTitle}>The Halflight Dispatch</h1>
        <section className={styles.section}>
          <p>
            The Halflight Dispatch is Joe Day's email newsletter and the best
            way to stay in the loop. Show & tour announcements, exclusive merch,
            song stories, and more delivered directly to your inbox.
          </p>
          <SubscribeForm />
        </section>
      </article>
    </Layout>
  );
}
