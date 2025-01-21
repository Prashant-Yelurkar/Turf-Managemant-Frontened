import axios from "axios";
import { checkTokens, getAuthToken } from "@/Actions/Controllers/TokenControllers";

export const myrouter = axios.create({
  baseURL: "/api/",
  headers: {
    "app": "USER",
    "Content-Type": "application/json",
  },
});

export const addAuthorizationHeader = () => {
  myrouter.defaults.headers.common['Authorization'] = "Bearer " + getAuthToken();
};

myrouter.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  if (checkTokens()) {
    config.headers['Authorization'] = "Bearer " + getAuthToken();
  }
  return config;
});

myrouter.interceptors.response.use(
  (response) => {
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  },
  (error) => {
    return {
      ...error,
      data: error.response.data,
      status: error.response.status,
    };
  }
);

