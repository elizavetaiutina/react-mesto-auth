import Header from "./Header";

function Login() {
  return (
    <>
      <Header namelink="Регистрация" link="sign-up" />
      <main className="sign">
        <h1 className="sign__title">Вход</h1>
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
            Войти
          </button>
        </form>
      </main>
    </>
  );
}
export default Login;
