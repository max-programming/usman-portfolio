import Link from "next/link";
// import styles from "@/styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className="bg-gradient-to-l to-blue-400 from-purple-500 w-full text-center text-2xl p-2 rounded-2xl">
      <div>
        <Link href="/">
          <a className="m-2 text-gray-100">Home</a>
        </Link>
        <Link href="/about">
          <a className="m-2 text-gray-100">About</a>
        </Link>
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
