import React from 'react';
import './Contact.css';

const Bio = () => {
  return ( 
    <article className="contact-grid">
      <h1 className="article-title">Let's talk</h1>
      <section className="section body-copy">
        <h2>Email is where it's at</h2>
        <p>Want to go deeper? I send out an email every 3-4 weeks. The emails can be anything from song stories to poems to playlists. But at the heart of the emails is the invitation to 2-way communication. I genuinely enjoy hearing from you and respond to every email that comes in. So, join the email list and let's talk.</p>
        <p>You can see <a href="https://www.getrevue.co/profile/joeday" target="_blank" rel="noreferrer">past issues</a> and sign up here:</p>
        <div id="revue-embed" className="revue-email-form">
          <form action="https://www.getrevue.co/profile/joeday/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
            <input className="revue-form-field" placeholder="Email" type="email" name="member[email]" id="member_email" />
            <input className="button" type="submit" value="Join" name="member[subscribe]" id="member_submit" />
          </form>
        </div>

        <h2 className="contact-info">Contact info</h2>
        <p>Management: <a className="email-link" href="mailto:meleahvallie@gmail.com">meleahvallie@gmail.com</a></p>
        <p>Booking: <a className="email-link" href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
      </section>
    </article>
   );
}
 
export default Bio;