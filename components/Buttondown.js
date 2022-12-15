import styles from './Buttondown.module.css';

export default function Buttondown() {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/joeday"
      method="post"
      target="popupwindow"
      onSubmit="window.open('https://buttondown.email/joeday', 'popupwindow')"
      className={styles.simpleEmailForm}
    >
      <input type="email" name="email" id="bd-email" placeholder="Enter your email" />
      <input type="submit" value="Subscribe" />
    </form>
  )
}