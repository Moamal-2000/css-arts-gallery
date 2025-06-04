import { motion } from "motion/react";
import Image from "next/image";
import s from "./ArtCardFrame.module.scss";

const ArtCardFrame = ({ data, index }) => {
  const { title, image, urlData, priority } = data;

  return (
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
        width={455}
        height={273}
        priority={priority}
      />
    </motion.a>
  );
};

export default ArtCardFrame;
