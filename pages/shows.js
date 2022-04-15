import Show from '../components/Show'
import styles from './Shows.module.css'
import Layout from '../components/layout'

export default function Shows() {
  return ( 
    <Layout home>
      <div className={styles.showsGrid}>
        <h1 className={styles.articleTitle}>Upcoming shows</h1>
        <section className={styles.shows}>
          <ul className={styles.upcomingShowsList}>
            Nothing scheduled at the moment
            {/* <Show date={'Dec 18, 5:30pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={true} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/221096113427'} />
            <Show date={'Dec 18, 8:00pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={true} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/224316064387'} /> */}
          </ul>

          <section className={styles.booking}>
            <p className={styles.divider}>+ + +</p>
            <p className={styles.bookingCopy}>For booking, email: <a className={styles.emailLink} href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
            <p className={styles.divider}>+ + +</p>
          </section>

          <h2>Past shows</h2>
          <ul className={styles.pastShowsList}>
            <Show date={'Dec 18, 5:30pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={false} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/221096113427'} />
            <Show date={'Dec 18, 8:00pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={false} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/224316064387'} />
          </ul>

        </section>
        
      </div>
    </Layout>
   );
}