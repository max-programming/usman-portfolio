// import styles from "styles/About.module.css";
import Layout from "components/Layout";
import Technology from "components/Technology";
import Image from "next/image";

export default function About() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2005;

  return (
    <Layout title="About">
      <div className="container mx-auto">
        <h1 className="font-mono text-4xl">
          <u>About</u> me 😀
        </h1>
        <div className="mt-3 text-xl">
          <p>
            My name is Usman Sabuwala. I am {age} years old.
            <br />I like programming and building web applications and teaching
            about that on my{" "}
            <a
              href="https://youtube.com/maxprogramming"
              className="text-red-700 font-semibold hover:underline"
              target="_blank"
            >
              YouTube channel.
            </a>
          </p>
          <h2 className="font-mono text-4xl mt-3">Technologies</h2>
          I work with the following technologies: <br />
          <div className="grid grid-cols-3 place-items-center">
            <Technology src="/technologies/web.png" />
            <Technology
              src="/technologies/git.png"
              href="https://git-scm.com/"
            />
            <Technology
              src="/technologies/github.png"
              href="https://github.com/"
            />
            <Technology
              src="/technologies/node.png"
              href="https://nodejs.org"
            />
            <Technology
              src="/technologies/react.png"
              href="https://reactjs.org"
            />
            <Technology
              src="/technologies/next.png"
              href="https://nextjs.org/"
            />
            <Technology
              src="/technologies/typescript.png"
              href="https://typescriptlang.org/"
            />
            <Technology
              src="/technologies/tailwind.png"
              href="https://tailwindcss.com/"
            />
            <Technology
              src="/technologies/electron.png"
              href="https://electronjs.org/"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
