"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import Image from "next/image";
import s from "./ArtCard.module.scss";
import ArtCardContent from "./ArtCardContent/ArtCardContent";

const ArtCard = ({ data, index }) => {
  const { title, image, urlData, priority } = data;

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

      <ArtCardFrame />
      <ArtCardContent data={data} />
    </motion.article>
  );
};

export default ArtCard;
