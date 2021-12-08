import React from 'react';
import Show from './Show';
import './Shows.css';


const Shows = () => {
  return ( 
    <div className="shows-grid">
      <h1 className="article-title">Upcoming shows</h1>
      <section className="shows">
        <ul className="upcoming-shows-list">
          <Show date={'Dec 18, 5:30pm'} location={'Woodinville, WA'} otherBands={"Tim Wilson"} onSale={true} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/221096113427'} />
          <Show date={'Dec 18, 8:00pm'} location={'Woodinville, WA'} otherBands={"Tim Wilson"} onSale={true} onSaleStartDate={'12/9, 10am'} ticketLink={'https://www.eventbrite.com/e/224316064387'} />
          {/* <Show date={'Oct 03'} location={'Portland, OR'} otherBands={"Deep Sea Diver"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 08'} location={'San Diego, CA'} otherBands={"Ivan & Alyosha"} onSale={true} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 09'} location={'Ojai, CA'} otherBands={"RADIOHEAD"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 17'} location={'San Francisco, CA'} otherBands={"The Smallest Bear..."} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 18'} location={'Boise, ID'} otherBands={"Wilco"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 21'} location={'Spokane, WA'} otherBands={"Alice in Chains"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 22'} location={'Conway, WA'} otherBands={"John Van Deusen"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} /> */}
        </ul>

        <section className="booking">
          <p className="divider">+ + +</p>
          <p className="booking-copy">For booking, email: <a className="email-link" href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
          <p className="divider">+ + +</p>
        </section>

        {/* <h2>Past shows</h2>
        <ul className="past-shows-list">
          <Show date={'Oct 02'} location={'Reno, NV'} otherBands={"John Van Deusen"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 03'} location={'Portland, OR'} otherBands={"Deep Sea Diver"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 08'} location={'San Diego, CA'} otherBands={"Ivan & Alyosha"} onSale={true} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 09'} location={'Ojai, CA'} otherBands={"RADIOHEAD"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 17'} location={'San Francisco, CA'} otherBands={"The Smallest Bear..."} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 18'} location={'Boise, ID'} otherBands={"Wilco"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 21'} location={'Spokane, WA'} otherBands={"Alice in Chains"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
          <Show date={'Oct 22'} location={'Conway, WA'} otherBands={"John Van Deusen"} onSale={false} onSaleStartDate={'8/12'} ticketLink={'https://npr.org'} />
        </ul> */}

      </section>
      
    </div>
   );
}
 
export default Shows;
