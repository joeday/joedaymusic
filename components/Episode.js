import PropTypes from "prop-types";
import styles from "./Episode.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Episode(props) {
  const { title, guest, releaseDate, image, id, num } = props;
  const link = "/podcast/" + id;
  return (
    <Link href={link}>
      <a className={styles.episodeCard}>
        <Image
          src={image}
          height="400"
          width="400"
          layout="raw"
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
      </a>
    </Link>
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
