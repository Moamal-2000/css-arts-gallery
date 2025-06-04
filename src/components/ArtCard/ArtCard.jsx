"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import Image from "next/image";
import CodePenIcon from "../Svgs/CodePenIcon";
import GitHubIcon from "../Svgs/GitHubIcon";
import s from "./ArtCard.module.scss";

const ArtCard = ({ data, index }) => {
  const { title, description, image, urlData, priority } = data;
  const isGithubUrl = urlData.type.toLowerCase() === "github";

  return (
    <motion.article
      className={s.artCard}
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0,
        delay: index * 0.05,
      })}
    >
      <a
        href={urlData.url}
        className={s.frame}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          priority={priority}
        />
      </a>

      <div className={s.content}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>

        <div className={s.links}>
          <a
            href={urlData.url}
            className={s.link}
            target="_blank"
            rel="noreferrer"
          >
            {isGithubUrl ? <GitHubIcon /> : <CodePenIcon />}
            View on {urlData.type}
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ArtCard;
