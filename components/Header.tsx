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
        <span style={{ color: "#c586c0" }}>Developer</span>.{" "}
        <span style={{ color: "#569cd6" }}>Student</span>.{" "}
        <span style={{ color: "#aaaa81" }}>Content Creator</span>
      </h3>
    </header>
  );
}
