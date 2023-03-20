import logo from "../images/logo.svg";

function Header({ namelink }) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип- Место" className="logo" />
      <p className="header__link">{namelink}</p>
    </header>
  );
}

export default Header;
