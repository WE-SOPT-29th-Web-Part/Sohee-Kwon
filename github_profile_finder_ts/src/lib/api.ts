import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { UserDataResponse } from "./interface";

const config: AxiosRequestConfig = { baseURL: "https://api.github.com/users/" };
export const client: AxiosInstance = axios.create(config);

interface getUserDataFunc {
  (userId: string): Promise<UserDataResponse | null>;
}

export const getUserData: getUserDataFunc = async (userId) => {
  try {
    const { data }: AxiosResponse<UserDataResponse> = await client.get(
      `${userId}`
    );
    console.log("[SUCCESS] getUser");
    return data;
  } catch (e) {
    console.log(e, "[FAIL] getUser");
    return null;
  }
};
