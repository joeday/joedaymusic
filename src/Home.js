import React from 'react';
import './Home.css';
import img from './images/VinylMockup-transparent.png';
// import preorder from './images/PreorderHalflight.svg';


const Home = () => {
  return ( 
    <div className="home-grid">
      <section className="home-content">
        <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
          <img className="responsive-image" src={img} alt="Album cover for Joe Day's full length album 'Halflight'" />
        </a>
        <div className="headline-blocks">
          <p className="headline-block-2">The new full-length album</p>
          <p className="headline-block-3">Halflight</p>
          <p className="headline-block-4">
            <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">Now at Bandcamp</a>
            &nbsp;+ Streaming everywhere
          </p>    
        </div>
            
      </section>
    </div>
   );
}
 
export default Home;