import Image from "next/image";

interface Props {
  src: string;
  href?: string;
}

const Technology = ({ src, href }: Props) => {
  return (
    <div className="m-4">
      {!href ? (
        <Image src={src} width={1000} height={1000} priority />
      ) : (
        <a href={href} target="_blank">
          <Image src={src} width={150} height={150} priority />
        </a>
      )}
    </div>
  );
};

export default Technology;
