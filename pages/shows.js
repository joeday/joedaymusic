import Show from '../components/Show'
import styles from './Shows.module.css'
import Layout from '../components/layout'
import shows from '../data/shows'

export const getStaticProps = async () => {
  return {
    props: {
      shows
    }
  }
}

export default function Shows(props) {
  return ( 
    <Layout home>
      <div className={styles.showsGrid}>
        <h1 className={styles.articleTitle}>Upcoming shows</h1>
        <h1>{props.greeting}</h1>
        <section className={styles.shows}>
          <ul className={styles.upcomingShowsList}>
            {props.shows.length!=0 ? props.shows.map((showInfo) => <Show {...showInfo} key={showInfo.id} />) : 'Nothing scheduled at the moment'}
          </ul>

          <section className={styles.booking}>
            <p className={styles.divider}>+ + +</p>
            <p className={styles.bookingCopy}>For booking, email: <a className={styles.emailLink} href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
            <p className={styles.divider}>+ + +</p>
          </section>

        </section>
        
      </div>
    </Layout>
   );
}
