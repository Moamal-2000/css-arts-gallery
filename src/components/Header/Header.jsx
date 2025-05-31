import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>CSS Art Gallery</h1>
      <p className={s.description}>
        A collection of creative artwork made with pure CSS by{" "}
        <a
          href={"https://www.linkedin.com/in/moamal-alaa"}
          target="_blank"
          rel="noreferrer"
        >
          Moamal Alaa
        </a>
      </p>
    </header>
  );
};

export default Header;
