import PropTypes from 'prop-types';
import styles from './Show.module.css';

export default function Show (props) {
  const { date, location, otherBands, onSale, onSaleStartDate, ticketLink} = props;
  
  const showDate = new Date(date);
  const now = new Date();
  const inFuture = (Date.parse(onSaleStartDate) < Date.parse(now)) ? false : true;
  console.log(inFuture);

  return ( 
    <li className={styles.showRow}>
      <section className={styles.basicShowInfo}>
        <div className={styles.date}>{date}</div>
        <div className={styles.cityState}>{location}</div>
        { otherBands ? <div className={styles.playingWith}><span className={styles.tiny}>with</span>{otherBands}</div> : null }
      </section>

      <section className={styles.ticketInfo}>
        { onSale ? <a className={styles.ticketLink} href={ticketLink} target="_blank" rel="noreferrer">Tickets</a> : <div className={styles.onSaleDate}>On sale: {onSaleStartDate}</div>}
      </section>
    </li>
   );
}

Show.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string,
  otherBands: PropTypes.string,
  onSale: PropTypes.bool,
  onSaleStartDate: PropTypes.string,
  ticketLink: PropTypes.string
}