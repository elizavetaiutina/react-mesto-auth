import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import InfoTooltip from "./InfoTooltip";

import auth from "../utils/auth.js";

function Register({ onStatusRegister, isOpen, onClose }) {
  const [isBadAnswerOfRequest, setIsBadAnswerOfRequest] = useState(false);
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    auth
      .register(formValue.password, formValue.email)
      .then(() => {
        setIsBadAnswerOfRequest(false);
        //onStatusRegister();
        //navigate("/signin", { replace: true }); //после регистрации прводим user на стр авторизации
      })
      .then(() => {
        navigate("/signin", { replace: true }); //после регистрации прводим user на стр авторизации
      })
      .catch((err) => {
        setIsBadAnswerOfRequest(true);
        onStatusRegister();
      })
      .finally(() => {
        //onStatusRegister();
        setFormValue({ email: "", password: "" });
      });
  };

  return (
    <>
      <InfoTooltip isOpen={isOpen} errorAnswerOfServer={isBadAnswerOfRequest} onClose={onClose} />
      <Header namelink="Войти" link="signin" />
      <main className="sign">
        <h1 className="sign__title">Регистрация</h1>
        <form name="register" className="form-sign form-sign_type_register" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-sign__input"
            placeholder="Email"
            value={formValue.email || ""}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="form-sign__input"
            placeholder="Пароль"
            value={formValue.password || ""}
            onChange={handleChange}
            required
          />
          <button type="submit" className="form-sign__button">
            Зарегистрироваться
          </button>
        </form>
        <p className="sign__text">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="sign__link">
            Войти
          </Link>
        </p>
      </main>
    </>
  );
}
export default Register;
