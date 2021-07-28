import React from 'react';
import './Home.css';
import img from './images/joeday-halflight-final-digital-xs.jpg';


const Home = () => {
  return ( 
    <div className="home-grid">
      <section className="home-headline">
        {/* <h1>Pre order Joe Day's full-length album Halflight</h1> */}
        <p className="divider">+ + +</p>
      </section>

      <section className="home-content">
        <p>Digital album streaming everywhere August 6th. Vinyl shipping in early October.</p>
        <p><a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">Preorder at Bandcamp</a></p>
        <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
          <img className="responsive-image-small" src={img} alt="Album cover for Joe Day's full length album 'Halflight'" />
        </a>
        <p className="small">P.s. My mailing list is the primary way I communicate to the people who care about my music. Join the mailing list and let's talk.</p>
        <div id="revue-embed" className="revue-email-form">
          <form action="https://www.getrevue.co/profile/joeday/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
            <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
            <input className="button" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
          </form>
        </div>
      </section>

      <section className="home-sidebar">
        <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
          <img className="responsive-image" src={img} alt="Album cover for Joe Day's full length album 'Halflight'" />
        </a>

      </section>
    </div>
   );
}
 
export default Home;