import './Show.module.css';

export default function Show ({props}) {
  const { date, location, otherBands, onSale, ticketLink} = props;
  // const { date, location, otherBands, onSale, onSaleStartDate, ticketLink} = props;
  // const todaysDate = new Date.now()
  return ( 
    <li className="show-row">
      <section className="basic-show-info">
        <div className="date">{date}</div>
        <div className="city-state">{location}</div>
        { otherBands ? <div className="playing-with"><span className="tiny">with</span>{otherBands}</div> : null }
      </section>

      <section className="ticket-info">
        { onSale ? <a className="ticket-link" href={ticketLink} target="_blank" rel="noreferrer">Tickets</a> : <div className="on-sale-date"></div>}
      </section>
    </li>
   );
}
