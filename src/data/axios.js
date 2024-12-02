import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV_URL
    : process.env.REACT_APP_API_PROD_URL;

export const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});
