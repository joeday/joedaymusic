import { useRouter } from "next/router";
import styles from "./NavLink.module.css";
import mergeClasses from "../utilities/mergeClasses";

function NavLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const activeClasses = mergeClasses(styles.navLink, styles.active);

  return (
    <a
      href={href}
      onClick={handleClick}
      className={router.asPath === href ? activeClasses : styles.navLink}
    >
      {children}
    </a>
  );
}

export default NavLink;
