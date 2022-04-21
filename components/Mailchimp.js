import { useState } from 'react';
import jsonp from "jsonp";
import PropTypes from 'prop-types';
import styles from './Mailchimp.module.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe';


export default function Mailchimp() {

  const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_KEY} />
  
  return (
    <div className={styles.simpleEmailForm}>
      <MailchimpSubscribe
        url={process.env.REACT_APP_MAILCHIMP_KEY}
        render={({ subscribe, status, message}) => (
          <div>
            <SimpleForm onSubmitted={formData => subscribe(formData)} />
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          </div>
        )}
      />
    </div>
  ) 
}