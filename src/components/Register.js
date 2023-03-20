import { useState, useEffect } from "react";
import Header from "./Header";
import InfoTooltip from "./InfoTooltip";
import imgSuccess from "../images/success.svg";
import imgFail from "../images/fail.svg";

function Register() {
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  return (
    <>
      <InfoTooltip imgPopup={imgSuccess} isOpen={isInfoTooltipPopupOpen} />
      <Header namelink="Войти" />
      <div className="sign">
        <h1 className="sign__title">Регистрация</h1>
        <form name="register" className="form-sign form-sign_type_register">
          <input
            type="email"
            name="email"
            className="form-sign__input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            className="form-sign__input"
            placeholder="Пароль"
            required
          />
          <button type="submit" className="form-sign__button">
            Зарегистрироваться
          </button>
        </form>
        <p className="sign__text">
          Уже зарегистрированы?{" "}
          <a href="#" className="sign__link">
            Войти
          </a>
        </p>
      </div>
    </>
  );
}
export default Register;
