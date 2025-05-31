import ArtsSection from "@/components/ArtsSection/ArtsSection";
import Header from "@/components/Header/Header";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <div className="container">
        <Header />
        <ArtsSection />
      </div>
    </main>
  );
}
