// import styles from "styles/Footer.module.css";
import { FiGithub, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="selection:bg-blue-200 selection:text-black absolute bottom-4 left-1/4 right-1/4">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
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
        <p className="text-2xl text-center mt-4 mb-3">
          Built with{" "}
          <a href="https://nextjs.org" className="font-bold text-blue-600">
            Next.js
          </a>
          . Hosted on{" "}
          <a href="https://vercel.com" className="font-bold text-blue-700">
            Vercel
          </a>
        </p>
      </div>
    </footer>
  );
}
