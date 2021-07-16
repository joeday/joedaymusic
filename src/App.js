import './App.css';
import spotifyLogo from './images/Spotify_logo_without_text_white.svg';
import appleLogo from './images/Apple_Music_Icon_wht_sm_073120.svg';
import img from './images/joeday-halflight-final-digital-xs.jpg';
import bandcampLogo from './images/bc-logotype-light.svg';

function App() {
  return (
    <div className="App">
      <main className="landing-page">
        <header className="site-header">Joe Day</header>

        <section className="site-headline">
          <h1>Pre order Joe Day's full-length album Halflight</h1>
          <p className="divider">+ + +</p>
        </section>

        <section className="site-content">
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

        <section className="site-sidebar">
          <a href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
            <img className="responsive-image" src={img} alt="Album cover for Joe Day's full length album 'Halflight'" />
          </a>

        </section>

        <footer className="site-footer">
          <span className="streaming-links">
            Listen:
            <a className="streaming-icon" href="https://open.spotify.com/artist/7x1PLGWhJe9SsmZ8i4VGCE?si=yQl5fRWVS0G4I9uIUl1LRQ" rel="noreferrer" target="_blank">
              <img src={spotifyLogo} alt="Spotify logo" height="24" />
            </a>
            <a className="streaming-icon" href="https://music.apple.com/us/artist/joe-day/214945054" rel="noreferrer" target="_blank">
              <img src={appleLogo} alt="Apple Music logo" height="24" />
            </a>
            <a className="streaming-icon" href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
              <img src={bandcampLogo} alt="Bandcamp logo" height="24" />
            </a>
          </span>
          <a className="photoCredit" href="https://www.janaearlyphotography.com/" rel="noreferrer" target="_blank">Photos by Jana Early</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
