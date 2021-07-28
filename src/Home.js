import React from 'react';
import './Home.css';
import img from './images/joeday-halflight-final-digital-xs.jpg';
import preorder from './images/PreorderHalflight.svg';


const Home = () => {
  return ( 
    <div className="home-grid">
      <section className="home-content">
        <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
          <img className="responsive-image" src={img} alt="Album cover for Joe Day's full length album 'Halflight'" />
        </a>
        <img className="headline-img responsive-img" src={preorder} alt="Preorder Joe's new full length album Halflight" />
        <p className="description">
          <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">Now at Bandcamp</a>
          &nbsp; + Streaming everywhere August 6
        </p>        
      </section>
    </div>
   );
}
 
export default Home;