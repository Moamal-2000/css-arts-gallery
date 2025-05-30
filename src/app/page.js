import Header from "@/Components/Header/Header";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <div className="container">
        <Header />
      </div>
    </main>
  );
}
