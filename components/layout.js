import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from './layout.module.css'

import MailchimpSimple from '../components/Mailchimp';


export default function Layout({ children }) {

  const router = useRouter();

  return (
    <div className={styles.App}>
      <main className={styles.appShell}>
        
        <header className={styles.siteHeader}>
          <div className={styles.siteLogo}>
            <Link href="/">
              <a>
                <Image 
                  src="/images/JoeDay.svg"
                  alt="Joe Day Music Logo"
                  width="514"
                  height="94"
                  layout="raw"
                />
              </a>
            </Link>
          </div>
          
          <nav className={styles.siteNav}>
            <Link href="/bio" activeClassName={styles.active}>
              <a className={router.pathname == "/bio" ? styles.active : ""} >Bio</a>
            </Link>
            <Link href="/shows">
              <a className={router.pathname == "/shows" ? styles.active : ""} >Shows</a>
            </Link>
            <Link href="/contact">
            <a className={router.pathname == "/contact" ? styles.active : ""} >Contact</a>
            </Link>
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
            layout="raw"
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
            layout="raw"
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
                height="16"
                width="16"
                layout="raw"
              />
            </a>
            <a className={styles.streamingIcon} href="https://music.apple.com/us/artist/joe-day/214945054" rel="noreferrer" target="_blank">
              <Image 
                priority
                src="/images/Apple_Music_Icon_black_sm_.svg"
                alt="Apple Music"
                height="16"
                width="16"
                layout="raw"
              />
            </a>
            <a className={styles.streamingIcon} href="https://joeday.bandcamp.com/album/halflight" rel="noreferrer" target="_blank">
              <Image 
                priority
                src="/images/bc-logotype-black.svg"
                alt="Bandcamp"
                height="16"
                width="49"
                layout="raw"
              />
            </a>
          </span>
          <MailchimpSimple />
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