import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Mailchimp.module.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated }) => {
  
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mmerge6, setMmerge6] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    fname &&
    lname &&
    mmerge6 &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
      MMERGE6: mmerge6.value
    });
  }

  useEffect(() => {
    if(status === "success") {
      clearFields();
    }
  }, [status])

  const clearFields = () => {
    setFname('');
    setLname('');
    setEmail('');
    setMmerge6('');
  }

  return (
    <form 
      className={styles.emailForm}
      onSubmit={(e) => handleSubmit(e)}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <>
          <div
            className={styles.success}
            dangerouslySetInnerHTML={{ __html: message }}
          />
          <Image 
            src="/images/tinafeyhighfive.gif"
            alt="High five gif"
            width="498"
            height="498"
          />
          </>
      )}

      {status !== "success" ? (
        <>
          <label className={styles.emailFormLabel} htmlFor="FirstName">First name</label>
          <input
            id="FirstName"
            ref={node => (fname = node)}
            type="text"
          />
          <label className={styles.emailFormLabel} htmlFor="LastName">Last name</label>
          <input
            id="LastName"
            ref={node => (lname = node)}
            type="text"
          />
          <label className={styles.emailFormLabel} htmlFor="email">Email address</label>
          <input
            id="email"
            ref={node => (email = node)}
            type="email"
          />
          <label className={styles.emailFormLabel} htmlFor="Zip">Zip code (optional)</label>
          <input
            id="Zip"
            ref={node => (mmerge6 = node)}
            type="text"
          />
          <input
            type="submit"
            value="Sign me up!"
          />
        </>
      ) : null}
      
    </form>
  );
};

export default function MailchimpCustom() {
  return (
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_KEY}
      render={({ subscribe, status, message}) => (
        <CustomForm 
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)} />
      )}
    />
  )
  
}