import "../Style/Header.css";
import XtechLogo from "../Asset/XtechLogo.png";

const Header = () => {
  return (
    <header className="header-container">
      <a target="_blank" rel="noreferrer" href="/_">
        <img class="header-logo" src={XtechLogo} alt=""></img>
      </a>
      <ul className="header-list">
        <a href="/" target="_self" rel="noreferrer">
          <li class="hover">Home</li>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <li class="hover">About us</li>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <li class="hover">Courses</li>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <li class="hover">Success Stories</li>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <li class="hover">Contact us</li>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <li class="hover-login">Login</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
