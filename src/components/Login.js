import { useState } from "react";
import Header from "./Header";

function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const resetForm = () => {
    setFormValue({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onLogin(formValue.password, formValue.email);

    resetForm();
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
