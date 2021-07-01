import Link from "next/link";
import AboutIcon from "./icons/About";
import HomeIcon from "./icons/Home";
import BlogIcon from "./icons/Blog";
import NavLink from "./NavLink";
// import styles from "styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className="bg-gradient-to-l to-blue-400 from-purple-500 w-full text-center text-2xl p-2 rounded-2xl">
      <div className="flex items-center justify-evenly h-14">
        <NavLink href="/" text="Home" Icon={HomeIcon} />
        <NavLink href="/about" text="About" Icon={AboutIcon} />
        <a
          className="p-2 text-gray-100 outline-none rounded-xl transition-all border-4 border-transparent hover:border-indigo-300 flex items-center"
          href="https://blog.usman-s.me"
        >
          <BlogIcon />
          Blog
        </a>
        {/* <Link href="/projects">
            <a>Projects</a>
          </Link>*/}
        {/*
          <Link href="/contact">
            <a>Contact</a>
          </Link> */}
      </div>
    </nav>
  );
}
