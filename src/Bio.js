import React from 'react';
import './Bio.css';
// import imgPortraitLG from './images/bio-jd-portrait-lg.jpg';
// import motelSign from './images/JoeDay-7512.jpg';
import aLaCozy from './images/JoeDay-7535.jpg';
import staringOff from './images/JoeDay-7630.jpg';

const Bio = () => {
  return ( 
    <article className="bio-grid">
      <h1 className="article-title">Dreaming up blue skies again</h1>
      <section className="article-body">
        <p className="article-copy">
          Joe Day’s newest album, Halflight, represents a broadening of experience and self-expression. 
          In the aftermath of trauma, change, and reimagination, Halflight touches both on pain and healing, the difficulty of letting old things go, and the hope and possibility that comes from building something new from the ashes. 
          <img className="img-l img-container" src={aLaCozy} alt="A portrait of Joe Day sitting in front of an old motel in the Washington desert." />

          While personal and vulnerable, it touches on themes that feel bigger and reach wider than one man’s experience. Harmonizing between the grief and pain associated with loss and the hope of discovering new rhythms and relationships, Halflight encourages listeners to find their way forward—wherever they’re coming from.</p>
        <p className="article-copy">Growing up in Woodfords, CA (near Lake Tahoe), Joe Day first began connecting with the rhythm of music while playing bass lines along to the radio on his old family Gibson LG-0. At the height of grunge in the 90s, Joe cut his musical teeth both by pounding chords out along with Nirvana and by playing worship songs at youth group.</p>
        <img className="img-r img-container" src={staringOff} alt="A portrait of Joe Day leaning against a broken down school house in Govan, WA" />

        <p className="article-copy">Joe’s relationship with music has shifted, grown, and changed in the years since. From playing in bands he loved to going solo and sometimes feeling stuck as a songwriter, Joe has entered a new era with Halflight. </p>
      </section>


    </article>
   );
}
 
export default Bio;