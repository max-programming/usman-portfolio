// import styles from "@/styles/About.module.css";
import Layout from "@/components/Layout";
import { technologies } from "@/constants";

export default function About() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2005;

  return (
    <Layout title="About">
      <div>
        <h1>
          <u>About</u> me 🤓
        </h1>
        <div>
          <p>
            My name is Usman Sabuwala. I am {age} years old.
            <br />
            I like to code and develop. My hobby was computers in the past, but
            slowly it became my passion.
            <br />
            And now I code to build things.
          </p>
          <p>
            I work with the technologies mentioned below: <br />
            {technologies.map(tech => {
              const { name, link, image } = tech;
              return (
                <a href={link}>
                  <img src={image} alt={name} width={50} />
                </a>
              );
            })}
          </p>
        </div>
      </div>
    </Layout>
    // <Layout title="About">
    //   <div className={styles.about}>
    //     <h1>
    //       <u>About</u> me 🤓
    //     </h1>
    //     <div className={styles.aboutMe}>
    //       <p>
    //         My name is Usman Sabuwala. I am {age} years old.
    //         <br />
    //         I like to code and develop. My hobby was computers in the past, but
    //         slowly it became my passion.
    //         <br />
    //         And now I code to build things.
    //       </p>
    //       <p>
    //         I work with the technologies mentioned below: <br />
    //         {technologies.map(tech => {
    //           const { name, link, image } = tech;
    //           return (
    //             <a href={link}>
    //               <img src={image} alt={name} width={50} />
    //             </a>
    //           );
    //         })}
    //       </p>
    //     </div>
    //   </div>
    // </Layout>
  );
}
