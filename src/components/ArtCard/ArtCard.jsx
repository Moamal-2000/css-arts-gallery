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
      <motion.a
        href={urlData.url}
        className={s.frame}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          priority={priority}
        />
      </motion.a>

      <motion.div className={s.content}>
        <motion.h2
          className={s.title}
          {...fadeInOnViewMotionProps({
            visibilityThreshold: 0,
            initialY: 5,
            delay: index * 0.05 + 0.3,
          })}
        >
          {title}
        </motion.h2>
        <motion.p
          className={s.description}
          {...fadeInOnViewMotionProps({
            visibilityThreshold: 0,
            initialY: 5,
            delay: index * 0.05 + 0.4,
          })}
        >
          {description}
        </motion.p>

        <div className={s.links}>
          <motion.a
            href={urlData.url}
            className={s.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 + 0.5 }}
          >
            {isGithubUrl ? <GitHubIcon /> : <CodePenIcon />}
            View on {urlData.type}
          </motion.a>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ArtCard;
