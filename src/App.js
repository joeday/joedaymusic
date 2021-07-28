import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import Shows from './Shows';
import Bio from './Bio';
import Contact from './Contact';
import './App.css';
import spotifyLogo from './images/Spotify_logo_without_text_white.svg';
import appleLogo from './images/Apple_Music_Icon_wht_sm_073120.svg';
import bandcampLogo from './images/bc-logotype-light.svg';


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
                <NavLink to="/music" activeClassName="active">Music</NavLink>
                <NavLink to="/bio" activeClassName="active">Bio</NavLink>
                <NavLink to="/shows" activeClassName="active">Shows</NavLink>
                {/* <NavLink to="/store" activeClassName="active">Store</NavLink> */}
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </nav>
            </header>

            <section className="site-content">
              <Switch>
                <Route exact path="/"         component={Home} />
                <Route exact path="/shows"    component={Shows} />
                <Route exact path="/bio"      component={Bio} />
                {/* <Route exact path="/store"    component={Store} /> */}
                <Route exact path="/contact"  component={Contact} />
              </Switch>
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
      </Router>
    );
  }
}

export default App;
