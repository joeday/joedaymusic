import React from 'react';
import Mailchimp from './Mailchimp';
import './Contact.css';

const Bio = () => {
  return ( 
    <article className="contact-grid">
      <h1 className="article-title">Email is where it's at</h1>
      <section className="section body-copy">
        <p>Want to go deeper? I send out an email every 3-4 weeks. The emails can be anything from song stories to poems to playlists. But at the heart of the emails is the invitation to 2-way communication. I genuinely enjoy hearing from you and respond to every email that comes in. So, join the email list and let's talk.</p>
        <Mailchimp
          type='default'
          action={process.env.REACT_APP_MAILCHIMP_KEY}
          fields={[
            {
              name: 'EMAIL',
              id: 'email',
              label: 'Email (required)',
              placeholder: 'Email',
              type: 'email',
              required: true
            },
            {
              name: 'FNAME',
              id: 'firstName',
              label: 'First name',
              placeholder: 'First name',
              type: 'text',
              required: false
            },
            {
              name: 'LNAME',
              id: 'lastName',
              label: 'Last name',
              placeholder: 'Last name',
              type: 'text',
              required: false
            },
            {
              name: 'MMERGE6',
              id: 'zipCode',
              label: 'Zip code',
              placeholder: 'Zip code',
              type: 'text',
              required: false
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
          className="email-form"
        />
        <div className="other-emails">
          <h2 className="contact-info">Contact info</h2>
          <p>Management: <a className="email-link" href="mailto:management@joedaymusic.com">management@joedaymusic.com</a></p>
          <p>Booking: <a className="email-link" href="mailto:booking@joedaymusic.com">booking@joedaymusic.com</a></p>
        </div>
      </section>
    </article>
   );
}
 
export default Bio;