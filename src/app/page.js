import Header from "@/Components/Header/Header";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <div className="container">
        <header className={s.header}>
          <h1 className={s.title}>CSS Art Gallery</h1>
          <p className={s.description}>
            A collection of creative artwork made with pure CSS by{" "}
            <a href="https://www.linkedin.com/feed">Moamal Alaa</a>
          </p>
        </header>
        <Header />
      </div>
    </main>
  );
}
