import Link from "next/link";
import Nav from "@/components/Nav";
// import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center to-blue-500 from-purple-600 bg-gradient-to-l p-4 text-white mb-8">
      {/* <Nav /> */}
      <h1 className="text-4xl md:text-5xl m-1">
        <Link href="/">
          <a>Usman Sabuwala</a>
        </Link>
      </h1>
      <h3 className="text-xl md:text-3xl m-2 text-center">
        <span className="text-green-200">Developer</span>.{" "}
        <span className="text-purple-200">Student</span>.{" "}
        <span className="text-yellow-200">Content Creator</span>
      </h3>
    </header>
    // <header className={styles.header}>
    //   <h1>
    //     <Link href="/">
    //       <a>Usman Sabuwala</a>
    //     </Link>
    //   </h1>
    //   <h3>
    //     <span style={{ color: "#c586c0" }}>Developer</span>.{" "}
    //     <span style={{ color: "#569cd6" }}>Student</span>.{" "}
    //     <span style={{ color: "#aaaa81" }}>Content Creator</span>
    //   </h3>
    // </header>
  );
}
