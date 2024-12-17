import styles from "./SubscribeForm.module.css";
import { useState } from "react";

const subscribe = async (formData) => {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return await response.json();
};

const FormControl = ({
  label,
  value,
  onChange,
  id,
  name,
  type,
  isRequired,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <label className={styles.label} htmlFor={id}>
        {label} {isRequired && <span className={styles.required}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={isRequired}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default function SubscribeForm(props) {
  const { handleSubscribe } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
  });

  const setFormField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await subscribe(formData);
      handleSubscribe(true);
    } catch (error) {
      console.error(error);
      handleSubscribe(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
      {isSubmitting ? (
        <p>Submitting...</p>
      ) : (
        <>
          <FormControl
            className={styles.firstName}
            label="First name"
            value={formData.firstName}
            onChange={(value) => setFormField("firstName", value)}
            id="first-name"
            name="metadata__first-name"
            type="text"
            isRequired
            placeholder="Neil"
          />

          <FormControl
            className={styles.lastName}
            label="Last name"
            value={formData.lastName}
            onChange={(value) => setFormField("lastName", value)}
            id="last-name"
            name="metadata__last-name"
            type="text"
            isRequired
            placeholder="Young"
          />

          <FormControl
            className={styles.email}
            label="Email"
            value={formData.email.value}
            onChange={(value) => setFormField("email", value)}
            id="email"
            name="email"
            type="email"
            isRequired
            placeholder="you@example.com"
          />

          <FormControl
            className={styles.zip}
            label="Zipcode"
            value={formData.zipcode.value}
            onChange={(value) => setFormField("zipcode", value)}
            id="zipcode"
            name="zipcode"
            type="text"
            placeholder="96120"
          />

          <button type="submit">Subscribe</button>
        </>
      )}
    </form>
  );
}
