import React from 'react';
import './Contact.css';

const Bio = () => {
  return ( 
    <article>
      <h1>Let's talk</h1>
      <section className="section body-copy">
        <h2>Email is where the magic happens</h2>
        <p>Want to go deeper? I send out an email every 3-4 weeks. The emails can be anything from song stories to poems to playlists. But at the heart of the emails is the invitation to 2-way communication. I genuinely enjoy hearing from you and respond to every email that comes in. So, join the email list and let's jam!</p>
        <p>You can see past issues and sign up here: <a href="https://www.getrevue.co/profile/joeday" target="_blank" rel="noreferrer">https://www.getrevue.co/profile/joeday</a></p>
      </section>
      <section className="section">
        <h2>Contact info</h2>
        <p>Management: <a className="email-link" href="mailto:management@joedaymusic.com">booking@joedaymusic.com</a></p>
        <p>Booking: <a className="email-link" href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
      </section>
    </article>
   );
}
 
export default Bio;