interface Props {
  src: string;
  href?: string;
}

const Technology = ({ src, href }: Props) => {
  return (
    <div className="m-4">
      {!href ? (
        <img src={src} />
      ) : (
        <a href={href} target="_blank">
          <img src={src} />
        </a>
      )}
    </div>
  );
};

export default Technology;
