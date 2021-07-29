import React from 'react';
import './Home.css';
import img from './images/joeday-halflight-final-digital-xs.jpg';
// import preorder from './images/PreorderHalflight.svg';


const Home = () => {
  return ( 
    <div className="home-grid">
      <section className="home-content">
        <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
          <img className="responsive-image" src={img} alt="Album cover for Joe Day's full length album 'Halflight'" />
        </a>
        {/* <img className="headline-img responsive-image" src={preorder} alt="Preorder the new full length album Halflight" /> */}
        <p className="headline-blocks">
          <p class="headline-block-1">Preorder</p>
          <p class="headline-block-2">The new full-length album</p>
          <p class="headline-block-3">Halflight</p>
          <p className="headline-block-4">
            <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">Now at Bandcamp</a>
            &nbsp;+ Streaming everywhere August 6
          </p>    
        </p>
            
      </section>
    </div>
   );
}
 
export default Home;