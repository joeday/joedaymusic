import styles from "./SubscribeForm.module.css";

export default function SubscribeForm(props) {
  const { afterSubmit } = props;

  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/joeday"
      method="post"
      className={styles.subscribeForm}
      onSubmit={afterSubmit}
    >
      <div className={styles.firstName}>
        <label htmlFor="first-name">First name</label>
        <input
          id="first-name"
          type="text"
          name="metadata__first-name"
          required
          placeholder="Neil"
        />
      </div>

      <div className={styles.lastName}>
        <label htmlFor="last-name">Last name</label>
        <input
          id="last-name"
          type="text"
          name="metadata__last-name"
          required
          placeholder="Young"
        />
      </div>

      <div className={styles.email}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="you@example.com" />
        <input type="hidden" value="1" name="embed" />
      </div>

      <div className={styles.zip}>
        <label htmlFor="zipcode">Zipcode</label>
        <input type="zipcode" name="zipcode" placeholder="96120" />
        <input type="hidden" value="1" name="embed" />
      </div>

      <button type="submit">Subscribe</button>
    </form>
  );
}
