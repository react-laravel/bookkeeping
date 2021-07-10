import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
if (localStorage.token) {
  instance.defaults.headers.common.Authorization = localStorage.token;
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
    if (error.response) {
      if (error.response.config.url === "/user/logout") {
        return error;
      }

      switch (error.response.status) {
        case 400:
          break;
        case 401: {
          break;
        }
        case 422:
          break;
        default:
      }
    }

    return Promise.reject(error.response);
  }
);

export default instance;
