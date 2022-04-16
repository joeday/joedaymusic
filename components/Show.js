import PropTypes from 'prop-types';
import './Show.module.css';

export default function Show (props) {
  const { date, location, otherBands, onSale, onSaleStartDate, ticketLink} = props;
  
  const showDate = new Date(date);
  const now = new Date();
  const inFuture = (Date.parse(showDate) < Date.parse(now)) ? false : true;

  return ( 
    <li className="show-row">
      <section className="basic-show-info">
        <div className="date">{date}</div>
        <div className="city-state">{location}</div>
        { otherBands ? <div className="playing-with"><span className="tiny">with</span>{otherBands}</div> : null }
      </section>

      <section className="ticket-info">
        { onSale ? <a className="ticket-link" href={ticketLink} target="_blank" rel="noreferrer">Tickets</a> : <div className="on-sale-date">On sale: {onSaleStartDate}</div>}
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