import PropTypes from "prop-types";
import styles from "./Episode.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Episode(props) {
  const { title, slug, guest, releaseDate, image, placeholder, num } = props;
  const dateStringOptions = { month: "long", day: "2-digit" };
  const link = "/podcast/" + slug;
  const curTime = new Date();
  const releaseTime = new Date(releaseDate);
  const dateString = new Date(releaseTime).toLocaleDateString(
    "en-US",
    dateStringOptions
  );

  return (
    <>
      {curTime >= releaseTime ? (
        <Link href={link} className={styles.episodeCard}>
          <Image
            src={image}
            height="400"
            width="400"
            className={styles.episodeImage}
          />
          <pre className={styles.episodeMetadata}>
            Episode {num} - {releaseDate}
          </pre>
          <h2 className={styles.episodeTitle}>
            {title}
            <br />
            <small className={styles.tiny}>with</small>
            {guest}
          </h2>
        </Link>
      ) : (
        <div className={styles.placeholderCard}>
          <h2 className={styles.placeholderTitle}>{dateString}</h2>
          <p className={styles.placeholderSubtitle}>{title}</p>
          <Image
            src={placeholder}
            className={styles.placeholderImage}
            quality={100}
            width="400"
            height="400"
          />
        </div>
      )}
    </>
  );
}

Episode.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  guest: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  links: PropTypes.array,
};
