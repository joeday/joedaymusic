import Layout from "../components/layout";
import styles from "./support-wilderness.module.css";

export default function Music() {
  return (
    <Layout home>
      <article className={styles.supportWildernessGrid}>
        <h1 className={styles.supportWildernessTitle}>
          Help bring <em>Wilderness</em> to life
        </h1>
        <section className={styles.supportWildernessBody}>
          <p>
            I’m working on <em>Wilderness</em>, the most ambitious musical
            project of my career. It’s an album about the longings we all carry;
            longings for meaning, and transcendence — told through 16 songs and
            a vision that reaches into video and film. You can join me in
            bringing this to life.
          </p>
          <a
            href="https://renewthearts.donorsupport.co/page/Joe-Day"
            className="button"
            target="blank"
          >
            Donate now
          </a>
          <h3>Start here:</h3>
          <div className={styles.iframeContainer}>
            <iframe
              className={styles.responsiveIframe}
              src="https://www.youtube.com/embed/qYcrc9g47_Y?si=7RZHIzWes0Pl8wyk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <h4>To Support Joe's new Album...</h4>
          <p>
            <a
              href="https://renewthearts.donorsupport.co/page/Joe-Day"
              target="blank"
            >
              Head on over to my fundraiser page at Renew The Arts
            </a>
            . You can give any amount, you can even sign up to donate monthly{" "}
            <em>which helps a ton btw</em>, and the great news is the first
            $4000 in donations will be matched dollar for dollar - your gift
            will go twice as far.
          </p>

          <h4 className={styles.supportWildernessH4}>
            NEW: Joe plays the song <em>Blood Moon</em> from his upcoming album{" "}
            <em>Wilderness</em>
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
          <a
            href="https://renewthearts.donorsupport.co/page/Joe-Day"
            className="button"
            target="blank"
          >
            I want to donate
          </a>
          <h3>The full story</h3>

          <p>
            These songs are meant to sit with you in disorientation and doubt,
            and offer beauty instead of easy answers. Far too often we think the
            only way out of the metaphorical desert is by correcting our
            thinking. We target the brain. While I believe that's an important
            part of the puzzle, it's not the only part. What about imagination?
            What about beauty? What about presence? Transcendence is not merely
            a cognitive excercise, it's an embodied one that engages every
            aspect of our being. We all know the power of music and it's ability
            to take us places we've never been. This album is here for that.
          </p>
          <p>
            I’ve already started recording, and I’m committed to finishing it —
            but I need your help.It’ll take about $25,000 to complete the
            project. The first $4,000 in donations will be matched, dollar for
            dollar. All gifts are tax-deductible through{" "}
            <a href="https://renewthearts.org/" target="_blank">
              Renew the Arts
            </a>
            .
          </p>
          <p>
            This isn’t a Kickstarter — it’s something more human: a work of art
            built in community. Everyone who gives is part of the story. You’ll
            get behind-the-scenes updates twice a month, a vinyl or t-shirt
            (your choice), an invite to a pre-release listening party, and the
            option to be named in the album credits.
          </p>
          <p>
            If this resonates with you, I’d be honored to have your support.
          </p>
          <a
            href="https://renewthearts.donorsupport.co/page/Joe-Day"
            target="_blank"
            className="button"
          >
            I want to make Wilderness happen
          </a>
        </section>
      </article>
    </Layout>
  );
}
