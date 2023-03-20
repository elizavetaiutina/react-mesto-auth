import { token } from "./constants.js";

class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Ошибка: ${result.status}`); // если ошибка, отклоняем промис
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  editUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  editUserAvatar(data) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  getInitialCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  createNewCard(data) {
    return this._request(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this._request(`${this._url}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      });
    } else {
      return this._request(`${this._url}/cards/${id}//likes`, {
        method: "PUT",
        headers: this._headers,
      });
    }
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});

export default api;
