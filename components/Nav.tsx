import Link from "next/link";
import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import styles from "@/styles/Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-l to-blue-400 from-purple-500 w-full text-center text-2xl p-2 rounded-2xl">
      <div className="flex items-center justify-evenly">
        <Link href="/">
          <a className="p-2 text-gray-100 outline-none rounded-xl transition-all border-4 border-transparent hover:border-indigo-300">
            Home
          </a>
        </Link>
        <a
          className="p-2 text-gray-100 outline-none rounded-xl transition-all border-4 border-transparent hover:border-indigo-300"
          href="https://blog.usman-s.me"
        >
          Blog
        </a>
        {/* <Link href="/about">
            <a className="m-2 text-gray-100">About</a>
          </Link> */}
        {/* <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link> */}
      </div>
      {/* <div></div> */}
    </nav>
    // <nav className={styles.nav}>
    //   <div className={styles.links}>
    //     <Link href="/">
    //       <a>Home</a>
    //     </Link>
    //     <Link href="/about">
    //       <a>About</a>
    //     </Link>
    //     {/* <Link href="/projects">
    //       <a>Projects</a>
    //     </Link>
    //     <Link href="/contact">
    //       <a>Contact</a>
    //     </Link> */}
    //   </div>
    //   <div className={styles.separator}></div>
    // </nav>
  );
}
