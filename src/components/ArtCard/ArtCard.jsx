import Image from "next/image";
import CodePenIcon from "../Svgs/CodePenIcon";
import GitHubIcon from "../Svgs/GitHubIcon";
import s from "./ArtCard.module.scss";

const ArtCard = ({ data }) => {
  const { title, description, image, urlData } = data;
  const isGithubUrl = urlData.type.toLowerCase() === "github";

  return (
    <article className={s.artCard}>
      <div className={s.frame}>
        <Image src={image} alt={title} width={300} height={300} />
      </div>

      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>

      <a href={urlData.url} target="_blank" rel="noreferrer">
        {isGithubUrl ? <GitHubIcon /> : <CodePenIcon />}
        View on {urlData.type}
      </a>
    </article>
  );
};

export default ArtCard;
