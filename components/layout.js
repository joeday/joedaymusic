import Link from 'next/link'
import Image from 'next/image'
import styles from './layout.module.css'

// import Mailchimp from './Mailchimp';


export default function Layout({ children }) {
  return (
    <div className={styles.App}>
      <main className={styles.appShell}>
        
        <header className={styles.siteHeader}>
          <div className={styles.siteLogo}>
            
              <Image 
                src="/images/JoeDay.svg"
                alt="Joe Day Music Logo"
                width="514"
                height="94"
              />

          </div>
          
          <nav className={styles.siteNav}>
            <Link href="/bio" className={({ isActive }) => (isActive ? " active" : "")}>Bio</Link>
            <Link href="/shows" className={({ isActive }) => (isActive ? " active" : "")}>Shows</Link>
            <Link href="/contact" className={({ isActive }) => (isActive ? " active" : "")}>Contact</Link>
            <a href="https://joeday.bandcamp.com/album/halflight" target="_blank" rel="noreferrer">Store</a>
          </nav>
        </header>

        <aside className={styles.sidebarL}>
          <Image 
            priority
            src="/images/fear_and_love.svg"
            alt="Fear and love"
            width="35"
            height="534"
          />
        </aside>

        <section className={styles.siteContent}>
          {children}
        </section>
        
        <aside className={styles.sidebarR}>
          <Image 
            priority
            src="/images/love_and_fear.svg"
            alt="Love and fear"
            width="35"
            height="534"
          />
        </aside>

        <footer className={styles.siteFooter}>
          <span className={styles.streamingLinks}>
            Listen:
            <a className={styles.streamingIcon} href="https://open.spotify.com/artist/7x1PLGWhJe9SsmZ8i4VGCE?si=yQl5fRWVS0G4I9uIUl1LRQ" rel="noreferrer" target="_blank">
              <Image 
                priority
                src="/images/Spotify_logo_without_text_black.svg"
                alt="Spotify"
                height="24"
                width="24"
              />
            </a>
            <a className={styles.streamingIcon} href="https://music.apple.com/us/artist/joe-day/214945054" rel="noreferrer" target="_blank">
              <Image 
                priority
                src="/images/Apple_Music_Icon_black_sm_.svg"
                alt="Apple Music"
                height="24"
                width="24"
              />
            </a>
            <a className={styles.streamingIcon} href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
              <Image 
                priority
                src="/images/bc-logotype-black.svg"
                alt="Bandcamp"
                height="24"
                width="74"
              />
            </a>
          </span>
          {/* <Mailchimp
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
            className={styles.simpleEmailForm}
          /> */}
        </footer>

        <aside className={styles.footerL}>
          <p>+</p>
        </aside>

        <aside className={styles.footerR}>
          <p>+</p>
        </aside>
      </main>
    </div>
  );
}