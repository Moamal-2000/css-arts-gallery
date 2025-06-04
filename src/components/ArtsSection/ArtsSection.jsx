import { CSS_ARTS_DATA } from "@/data/cssArtsData";
import ArtCard from "../ArtCard/ArtCard";
import s from "./ArtsSection.module.scss";

const ArtsSection = () => {
  return (
    <section className={s.artsSection}>
      {CSS_ARTS_DATA.map((art, index) => (
        <ArtCard key={art.id} data={art} index={index} />
      ))}
    </section>
  );
};

export default ArtsSection;
