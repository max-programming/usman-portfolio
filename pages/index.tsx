import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home | Usman Sabuwala">
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.image}>
            <Image src="/usman.jpg" width={250} height={250} />
          </div>
          <div className={styles.intro}>
            <h2>
              Hello there! I'm <span className={styles.name}>Usman</span>!
            </h2>
            <p>
              👋 My name is Usman Sabuwala, a web developer from India.
              <br />
              👨‍💻 I love programming and that led to many people. <br /> I learnt
              JavaScript, TypeScript, React.js and many other awesome things.{" "}
              <br /> My other interests include playing cricket and doing math
              😉
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
