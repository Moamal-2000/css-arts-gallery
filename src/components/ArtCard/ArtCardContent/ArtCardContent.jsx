import CodePenIcon from "@/components/Svgs/CodePenIcon";
import GitHubIcon from "@/components/Svgs/GitHubIcon";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./ArtCardContent.module.scss";

const ArtCardContent = ({ data, index }) => {
  const { title, description, urlData } = data;
  const isGithubUrl = urlData.type.toLowerCase() === "github";

  return (
    <div className={s.content}>
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
    </div>
  );
};

export default ArtCardContent;
