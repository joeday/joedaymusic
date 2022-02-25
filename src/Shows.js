import React from 'react';
import Show from './Show';
import './Shows.css';


const Shows = () => {
  return ( 
    <div className="shows-grid">
      <h1 className="article-title">Upcoming shows</h1>
      <section className="shows">
        <ul className="upcoming-shows-list">
          Nothing scheduled at the moment
          {/* <Show date={'Dec 18, 5:30pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={true} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/221096113427'} />
          <Show date={'Dec 18, 8:00pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={true} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/224316064387'} /> */}
        </ul>

        <section className="booking">
          <p className="divider">+ + +</p>
          <p className="booking-copy">For booking, email: <a className="email-link" href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
          <p className="divider">+ + +</p>
        </section>

        <h2>Past shows</h2>
        <ul className="past-shows-list">
          <Show date={'Dec 18, 5:30pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={false} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/221096113427'} />
          <Show date={'Dec 18, 8:00pm'} location={'Chateau Lill, Woodinville, WA'} otherBands={"Tim Wilson"} onSale={false} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/224316064387'} />
        </ul>

      </section>
      
    </div>
   );
}
 
export default Shows;
