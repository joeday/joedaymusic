import Image from "next/image";
import Layout from "../components/layout";
import styles from "./bio.module.css";

const classNames = (...styles) => styles.join(" ");
const leftImage = classNames(styles.imgL, styles.imgContainer);
const rightImage = classNames(styles.imgR, styles.imgContainer);

export default function Bio() {
  return (
    <Layout home>
      <article className={styles.bioGrid}>
        <h1 className={styles.articleTitle}>Dreaming up blue skies again</h1>
        <section className={styles.articleBody}>
          <p className={styles.articleCopy}>
            Joe Day is a Seattle-based singer-songwriter whose music is rooted
            in deep introspection, personal reckoning, and spiritual unrest. As
            the frontman of the band Mindhead (1999–2006), he spent years
            navigating the tension between rock venues and Sunday morning
            worship, embodying the push and pull between faith and the broader
            cultural landscape.
          </p>
          <Image
            priority
            src="/images/JoeDay-7535.jpg"
            className={leftImage}
            alt={
              "A portrait of Joe Day sitting in front of an old motel in the Washington desert."
            }
            width="880"
            height="538"
          />
          <p className={styles.articleCopy}>
            His solo work has taken an even more personal turn, exploring themes
            of doubt, disillusionment, and the struggle to hold onto something
            true in an era where the evangelical church has traded integrity for
            influence. In his album <i>Halflight</i>, Joe gives voice to those
            who feel abandoned by a faith they once called home—those watching
            as institutions built on hope and love contort themselves for power
            and money. His songwriting is raw, unflinching, and deeply human,
            offering both lament and possibility for those searching for meaning
            beyond broken systems.
          </p>
          <Image
            priority
            src="/images/JoeDay-7630.jpg"
            className={rightImage}
            alt={
              "A portrait of Joe Day leaning against a broken down school house in Govan, WA"
            }
            width="880"
            height="538"
          />
          <p className={styles.articleCopy}>
            In late 2023, Joe assembled The Coyotes to explore new material that
            picks up where <i>Halflight</i> left off. Consisting of Erin Spiegel
            on violin, Brian Ward on guitar, Jordan Peifer on bass, and Dan
            Folgado on drums, together The Coyotes bring a dynamic energy to
            Joe’s evolving sound, pushing deeper into themes of loss, hope, and
            the search for something real in a fractured world.
          </p>

          <p className={styles.articleCopy}>
            Through haunting melodies and honest lyricism, Joe Day continues to
            carve out space for the spiritual outsiders—the ones who refuse to
            settle for easy answers and instead embrace the complexities of
            belief, doubt, and everything in between.
          </p>
        </section>
      </article>
    </Layout>
  );
}
