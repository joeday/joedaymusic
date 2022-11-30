import PropTypes from "prop-types";
import styles from "./Episode.module.css";
import Image from "next/image";

export default function Episode(props) {
  const { title, guest, releaseDate, description, image, id, links } = props;
  return (
    <div className={styles.episodeCardWrapper}>
      <div className={styles.episodeCard}>
        <section className={styles.cardFront}>
          <Image
            src={image}
            height="400"
            width="400"
            layout="raw"
            className={styles.episodeImage}
          />
          <pre className={styles.episodeMetadata}>
            Episode {id} - {releaseDate}
          </pre>
          <h2 className={styles.episodeTitle}>
            {title}
            <br />
            <small className={styles.tiny}>with</small>
            {guest}
          </h2>
        </section>

        <section className={styles.cardBack}>
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
        </section>
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
