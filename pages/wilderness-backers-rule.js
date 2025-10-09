import Layout from "../components/layout";
import styles from "./support-wilderness.module.css";
import Head from "next/head";

export default function Music() {
  return (
    <Layout home>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <article className={styles.supportWildernessGrid}>
        <h1 className={styles.supportWildernessTitle}>
          Wilderness Backers Rule!!
        </h1>
        <section className={styles.supportWildernessBody}>
          <h4>This is a secret page</h4>
          <p>
            You're here because you backed my album <em>Wilderness</em>. Thank
            you! If you haven't backed it yet,{" "}
            <a href="support-wilderness">go donate now!</a>
          </p>

          <p>
            Please don't share this link — it's for backers only. Know someone
            who should back the project?{" "}
            <a href="support-wilderness">Send them here.</a>
          </p>

          <p>
            This space will evolve as I share the inside scoop on the new album.
            Now, for the good stuff...
          </p>

          <h3>Highway Dust, the album take</h3>
          <p>
            As I said in my email, we had a moment recently where we made a
            small tweak (one chord!) to <em>Highway Dust</em> which ended up
            resulting in us completely re-recording the song. Brian shot this
            video of me recording the new version. This was my second, take and
            is the one you'll hear on the album.
          </p>
          <div className={styles.iframeContainer}>
            <iframe
              className={styles.responsiveIframe}
              src="https://www.youtube.com/embed/gsZui_525nY?si=pVejXOF7ezU4PmQR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p>
            Naturally, there is a lot more going on on the album version: bass,
            drums, violin, etc... but this will give you a glimpse into the
            shape and feel of the new arrangement.
          </p>
          <h4>Some inside baseball about recording</h4>
          <p>
            You'll notice I'm recording guitar AND vocal together. This is
            somewhat unusual for a number of reasons. Generally, recording one
            instrument at a time is the way things work these days because you
            can dial it in and not have to worry about sound from other
            instruments bleeding over on to the track. But, in this case, we
            wanted it to feel more like a live performance and less like a
            polished studio performance, it needed to have that kind of
            vulnerability.
          </p>
          <p>
            One thing we've learned making this album is that good things happen
            when we build the song around my voice. Historically, the way we've
            done it has been to record everything else first, adding vocals at
            the very end of the process. While that's a tried and true way to
            work, what we're learning is that if the more tender, vulnerable,
            human aspect of the vocal performance is important, then that must
            be the foundation. So, we've started recording everything like this.
            It gives us much more usuable information on where to build and
            where not to. I've never recorded this way, so it feels fresh, new,
            and energizing. And I think the songs are benefitting from the
            process.
          </p>
          <p>Until next time...</p>
        </section>
      </article>
    </Layout>
  );
}
