import Layout from '../components/layout'
// import Mailchimp from '../components/Mailchimp'
import styles from './Contact.module.css'

export default function Bio() {
  return ( 
    <Layout home>
      <article className={styles.contactGrid}>
        <h1 className={styles.articleTitle}>Email is where it's at</h1>
        <section className={styles.section}>
          <p>Want to go deeper? I send out an email every 3-4 weeks. The emails can be anything from song stories to poems to playlists. But at the heart of the emails is the invitation to 2-way communication. I genuinely enjoy hearing from you and respond to every email that comes in. So, join the email list and let's talk.</p>
          
          <div className={styles.otherEmails}>
            <h2 className={styles.contactInfo}>Contact info</h2>
            <p>Management: <a className={styles.emailLink} href="mailto:management@joedaymusic.com">management@joedaymusic.com</a></p>
            <p>Booking: <a className={styles.emailLink} href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
          </div>
        </section>
      </article>
    </Layout>
   );
}