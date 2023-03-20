import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

// не забыть удалить линк у лого
function Header({ namelink, link }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип- Место" className="logo" />
      </Link>
      <Link to={`/${link}`} className="header__link">
        {namelink}
      </Link>
    </header>
  );
}

export default Header;
