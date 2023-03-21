import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import auth from "../utils/auth.js";

function Login() {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    auth
      .authorize(formValue.password, formValue.email)
      .then((data) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log("все плохо", err);
      })
      .finally(() => {
        setFormValue({ email: "", password: "" });
      });
  };

  return (
    <>
      <Header namelink="Регистрация" link="signup" />
      <main className="sign">
        <h1 className="sign__title">Вход</h1>
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
            Войти
          </button>
        </form>
      </main>
    </>
  );
}
export default Login;
