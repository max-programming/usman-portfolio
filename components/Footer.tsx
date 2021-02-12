import styles from "../styles/Footer.module.css";
import { FiGithub, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { useState } from "react";

export default function Footer() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.links}>
          <a
            href="https://youtube.com/MaxProgramming"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <FiYoutube color="red" size={40} />
          </a>
          <a
            href="https://twitter.com/MaxProgramming1"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <FiTwitter color="#1DA1F2" size={40} />
          </a>
          <a
            href="https://instagram.com/usmansabuwala7/"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <FiInstagram color="#5851db" size={40} />
          </a>
          <a
            href="https://github.com/max-programming"
            target="_blank"
            style={{ marginRight: 15 }}
          >
            <FiGithub color="#333" size={40} />
          </a>
        </div>
        <p className={styles.footerText}>
          Built with <a href="https://nextjs.org">Next.js</a>. Hosted on{" "}
          <a href="https://vercel.com">Vercel</a>
        </p>
      </div>
    </footer>
  );
}
