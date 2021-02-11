import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a>Usman Sabuwala</a>
        </Link>
      </h1>
      <h3>
        <span className={styles.devTitle}>Developer</span>.{" "}
        <span className={styles.studTitle}>Student</span>.{" "}
        <span className={styles.contentTitle}>Content Creator</span>
      </h3>
    </header>
  );
}
