import styles from "./SubscribeForm.module.css";

export default function SubscribeForm() {
  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/joeday"
      method="post"
      className={styles.subscribeForm}
    >
      <div className={styles.formRow}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="you@example.com" />
        <input type="hidden" value="1" name="embed" />
      </div>

      <div className={styles.formRow}>
        <label for="first-name">First name</label>
        <input
          id="first-name"
          type="text"
          name="metadata__first-name"
          required
          placeholder="Neil"
        />
      </div>

      <div className={styles.formRow}>
        <label for="last-name">Last name</label>
        <input
          id="last-name"
          type="text"
          name="metadata__last-name"
          required
          placeholder="Young"
        />
      </div>
      <input type="submit" value="Subscribe" />
    </form>
  );
}
