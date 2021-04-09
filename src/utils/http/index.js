import axios from "axios";

import token from "../token";

const http = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

http.interceptors.request.use(
  (config) => {
    let value = token.get();
    if (value) {
      config.headers["Authorization"] = `Bearer ${value}`;
    } else {
      config.headers["Authorization"] = "";
    }
    return config;
  },
  (error) => {
    token.remove();
    return Promise.reject(error);
  }
);

export default http;
