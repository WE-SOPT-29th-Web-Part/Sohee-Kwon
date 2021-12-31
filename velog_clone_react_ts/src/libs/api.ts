import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface Config {
  baseURL: string;
  headers: {
    "Content-Type": "application/json" | "multipart/form-data";
  };
}

const clientConfig: AxiosRequestConfig<Config> = {
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
};
const imageClientConfig: AxiosRequestConfig<Config> = {
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "multipart/form-data" },
};

export const client: AxiosInstance = axios.create(clientConfig);
export const imageClient: AxiosInstance = axios.create(imageClientConfig);
