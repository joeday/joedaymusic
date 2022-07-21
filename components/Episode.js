import PropTypes from "prop-types";
import styles from "./Episode.module.css";
import Image from "next/image";

export default function Episode(props) {
  const { title, guest, releaseDate, description, image, id, links } = props;
  return (
    <div className={styles.episode}>
      <Image
        src={image}
        height="400"
        width="400"
        layout="raw"
        className={styles.episodeImage}
      />
      <h2 className={styles.episodeTitle}>
        {title}
        <small className={styles.tiny}>with</small>
        {guest}
      </h2>
      <pre className={styles.episodeMetadata}>
        Episode {id} - {releaseDate}
      </pre>
      <p className={styles.episodeDescription}>{description}</p>
      <div className={styles.episodeLinks}>
        Episode links: &nbsp;
        {links.length != 0
          ? links.map((link) => (
              <a href={link.url} target="_blank" key={link.name}>
                {link.name}
              </a>
            ))
          : "No episodes"}
      </div>
    </div>
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
