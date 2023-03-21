class Auth {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _request(url, options) {
    return fetch(url, options).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  register(password, email) {
    return this._request(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: `${password}`, email: `${email}` }),
    });
  }

  authorize(password, email) {
    return this._request(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: `${password}`, email: `${email}` }),
    }).then((data) => {
      if (data) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
  }
}

const auth = new Auth({
  baseUrl: "https://auth.nomoreparties.co",
});

export default auth;
