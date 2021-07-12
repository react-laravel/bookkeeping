import axios from "axios";

import { logout } from "../helpers";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
if (localStorage.accessToken) {
  instance.defaults.headers.common.Authorization = `Bearer ${localStorage.accessToken}`;
}

instance.interceptors.request.use(
  (request) => {
    window.request = true;
    if (process.env.NODE_ENV === "development") {
      console.group("请求");
      window.console.log(request);
      console.groupEnd();
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "development") {
      console.group("返回");
      window.console.log(response);
      console.groupEnd();
    }

    const newToken = response.headers.authorization;
    if (newToken) {
      localStorage.token = newToken;
    }

    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response) {
      if (error.response.config.url === "/auth/logout") {
        return error;
      }

      switch (error.response.status) {
        case 400:
          alert(400);
          break;
        case 401: {
          logout();
          break;
        }
        case 403: {
          alert(403);
          break;
        }
        default:
      }
    }

    return Promise.reject(error.response);
  }
);

export default instance;
