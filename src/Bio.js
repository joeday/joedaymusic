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
      <section className="article-body body-copy">
        <p className="article-copy">
          Joe Day’s newest album, Halflight, represents a broadening of experience and self-expression. In the aftermath of trauma, change, and reimagination, Halflight touches both on pain and healing, the difficulty of letting old things go, and the hope and possibility that comes from building something new from the ashes. 
          <img className="img-l img-container" src={aLaCozy} alt="A portrait of Joe Day sitting in front of an old motel in the Washington desert." />

          While personal and vulnerable, sharing out of his experience within the toxic culture of Mars Hill, Halflight has themes that feel bigger and reach wider than one man’s experience. Harmonizing between the grief and pain associated with loss and the hope of discovering new rhythms and relationships with a benediction for the broken, it encourages listeners to find their way forward—wherever they’re coming from.</p>
        <p className="article-copy">Growing up near Lake Tahoe, Joe was always drawn to music. But that draw shifted gears when he discovered his family's old Gibson acoustic guitar. Before long, he was playing along to the songs on the radio. At the height of 90s grunge, Joe cut his musical teeth pounding out chords along with Nirvana, playing drums in a christian metal band, and like so many churched kids, playing worship songs at youth group.</p>
        <img className="img-r img-container" src={staringOff} alt="A portrait of Joe Day leaning against a broken down school house in Govan, WA" />

        <p className="article-copy">From playing in bands to eventually fronting Seattle indie band Mindhead to going solo, Joe’s relationship with music has shifted, grown, and changed over the years. He’s moved through seasons of feeling stuck as a songwriter, into this new season of creative hunger leading to shared enjoyment and significance for others.</p>
        <p className="article-copy">Halflight is a soundtrack for people living in the dissonance of being ushered into a post-fact world by the very people and institutions that told them truth matters. These songs seek to let people know they’re not alone, they’re seen. That we can move towards wholeness and hope.</p>
      </section>


    </article>
   );
}
 
export default Bio;