import React, { Component } from 'react';
import { HashRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
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
import siteLogo from './images/Joe Day.svg';
import Mailchimp from './Mailchimp';


class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <main className="app-shell">
            
            <header className="site-header">
              <div className="site-logo">
                <Link to="/"><img src={siteLogo} alt="Joe Day logo" /></Link>
              </div>
              
              <nav className="site-nav">
                <NavLink to="/bio" className={({ isActive }) => (isActive ? " active" : "")}>Bio</NavLink>
                <NavLink to="/shows" className={({ isActive }) => (isActive ? " active" : "")}>Shows</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? " active" : "")}>Contact</NavLink>
                <a href="https://joeday.bandcamp.com/album/halflight" target="_blank" rel="noreferrer">Store</a>
              </nav>
            </header>

            <aside className="sidebar-l">
              <img src={fearAndLove} alt="Fear and love" />
            </aside>

            <section className="site-content">
              <Routes>
                <Route index           element={<Home />} />
                <Route path="shows"    element={<Shows />} />
                <Route path="bio"      element={<Bio />} />
                <Route path="contact"  element={<Contact />} />
                <Route path="*"        element={<Home />} />
              </Routes>
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
              <Mailchimp
                type='simple'
                action={process.env.REACT_APP_MAILCHIMP_KEY}
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Join my email list',
                    type: 'email',
                    required: true
                  }
                ]}
                messages = {
                  {
                    sending: "Sending...",
                    success: "Thank you for subscribing!",
                    error: "An unexpected internal error has occurred.",
                    empty: "You must write an e-mail.",
                    duplicate: "Too many subscribe attempts for this email address",
                    button: "Subscribe"
                  }
                }
                className="simple-email-form"
              />
            </footer>

            <aside className="footer-l">
              <p>+</p>
            </aside>

            <aside className="footer-r">
              <p>+</p>
            </aside>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
