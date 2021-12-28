import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { UserDataResponse } from "../types/interface";

const config: AxiosRequestConfig = { baseURL: "https://api.github.com/users/" };
export const client: AxiosInstance = axios.create(config);

export const getUserData = async (
  userId: string
): Promise<UserDataResponse | null> => {
  try {
    const { data }: AxiosResponse<UserDataResponse> = await client.get(
      `${userId}`
    );
    return data;
  } catch (e) {
    return null;
  }
};
