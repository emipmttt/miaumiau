import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = instance;
