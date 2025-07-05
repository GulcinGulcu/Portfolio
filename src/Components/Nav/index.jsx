import "./styles.css";

export const Nav = ({ openNav, setOpenNav }) => {
  return (
    <nav className={openNav ? "nav active" : "nav"}>
      <ul class="nav__list">
        <li className="nav__item" onClick={() => setOpenNav(false)}>
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item" onClick={() => setOpenNav(false)}>
          <a href="#services" className="nav__link">
            My Services
          </a>
        </li>
        <li className="nav__item" onClick={() => setOpenNav(false)}>
          <a href="#about" className="nav__link">
            About me
          </a>
        </li>
        <li className="nav__item" onClick={() => setOpenNav(false)}>
          <a href="#work" className="nav__link">
            My Work
          </a>
        </li>
        <li className="nav__item" onClick={() => setOpenNav(false)}>
          <a href="#footer" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
