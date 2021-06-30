import Link from "next/link";

interface Props {
  Icon: React.FC;
  text: string;
  href: string;
}

const NavLink = ({ Icon, text, href }: Props) => {
  return (
    <Link href={href}>
      <a className="p-2 text-gray-100 outline-none rounded-xl transition-all border-4 border-transparent hover:border-indigo-300 flex items-center">
        <Icon />
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
