import Image from "next/image";
import s from "./ArtCard.module.scss";

const ArtCard = ({ data }) => {
  const { title, description, image, codepenUrl } = data;

  return (
    <article className={s.artCard}>
      <div className={s.frame}>
        <Image src={image} alt={title} width={300} height={300} />
      </div>

      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>

      <a href={codepenUrl} target="_blank" rel="noreferrer">
        {/* Codepen icon */}
        View on CodePen
      </a>
    </article>
  );
};

export default ArtCard;
