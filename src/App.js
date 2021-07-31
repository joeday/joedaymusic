import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import Shows from './Shows';
import Bio from './Bio';
import Contact from './Contact';
import './Constants.css';
import './App.css';
import spotifyLogo from './images/Spotify_logo_without_text_black.svg';
import appleLogo from './images/Apple_Music_Icon_black_sm_.svg';
import bandcampLogo from './images/bc-logotype-black.svg';
import fearAndLove from './images/fear_and_love.svg';
import loveAndFear from './images/love_and_fear.svg';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main className="app-shell">
            
            <header className="site-header">
              <div className="site-logo">
                <Link to="/">Joe Day</Link>
              </div>
              
              <nav className="site-nav">
                {/* <NavLink to="/music" activeClassName="active">Music</NavLink> */}
                <NavLink to="/bio" activeClassName="active">Bio</NavLink>
                <NavLink to="/shows" activeClassName="active">Shows</NavLink>
                {/* <NavLink to="/store" activeClassName="active">Store</NavLink> */}
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </nav>
            </header>

            <aside className="sidebar-l">
              <img src={fearAndLove} alt="Fear and love" />
            </aside>

            <section className="site-content">
              <Switch>
                <Route exact path="/"         component={Home} />
                <Route exact path="/shows"    component={Shows} />
                <Route exact path="/bio"      component={Bio} />
                {/* <Route exact path="/store"    component={Store} /> */}
                <Route exact path="/contact"  component={Contact} />
              </Switch>
            </section>
            
            <aside className="sidebar-r">
              <img src={loveAndFear} alt="Love and fear" />
            </aside>

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
              <div id="revue-embed" className="revue-email-form">
                <form action="https://www.getrevue.co/profile/joeday/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                  <input className="revue-form-field" placeholder="Email" type="email" name="member[email]" id="member_email" />
                  <input className="button" type="submit" value="Join" name="member[subscribe]" id="member_submit" />
                </form>
              </div>
            </footer>

            <aside className="footer-l">
              <p>+</p>
            </aside>

            <aside className="footer-r">
              <p>+</p>
            </aside>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
