import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const getUserData = async (userId) => {
  try {
    const { data } = await client.get(`${userId}`);
    console.log("[SUCCESS] getUser");
    return data;
  } catch (e) {
    console.log(e, "[FAIL] getUser");
  }
};
