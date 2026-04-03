"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./ArtCard.module.scss";
import ArtCardContent from "./ArtCardContent/ArtCardContent";
import ArtCardFrame from "./ArtCardFrame/ArtCardFrame";

const ArtCard = ({ data, index }) => {
  return (
    <motion.article
      className={s.artCard}
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0,
        delay: index * 0.05,
      })}
    >
      <ArtCardFrame data={data} index={index} />
      <ArtCardContent data={data} index={index} />
    </motion.article>
  );
};

export default ArtCard;
