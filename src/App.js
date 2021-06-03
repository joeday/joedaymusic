import './App.css';
import spotifyLogo from './images/Spotify_logo_without_text_white.svg';
import appleLogo from './images/Apple_Music_Icon_wht_sm_073120.svg';
import img from './images/all-I-want-digital-small.jpg';
// import youTubeLogo from './images/yt_icon_mono_dark.png';

function App() {
  return (
    <div className="App">
      <main className="landing-page">
        <header className="site-header">Joe Day</header>
        
        <section className="site-headline">
          <h1>All I Want Is Home Streaming Everywhere</h1>
          <p className="divider">+ + +</p>
        </section>
        
        <section className="site-content">
          <p>Listen to the first single from Joe’s upcoming full-length album Halflight out August 6th. </p>
          <img className="responsive-image-small" src={img} alt="Album cover for the single All I Want Is Home by Joe Day" />
          <p className="small">Be the first to know everything by joining the mailing list.</p>
          <div id="revue-embed" className="revue-email-form">
            <form action="https://www.getrevue.co/profile/joeday/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
              <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
              <input className="button" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
            </form>
          </div>
        </section>

        <section className="site-sidebar">
          <img className="responsive-image" src={img} alt="Album cover for the single All I Want Is Home by Joe Day" />
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
            {/* <a className="streaming-icon" href="https://spotify.com" target="_blank">
              <img src={youTubeLogo} height="24" />
            </a> */}
          </span>
          <a className="photoCredit" href="https://brunobergher.com/" rel="noreferrer" target="_blank">Photo by Bruno Bergher</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
