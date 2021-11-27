import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArticles = async () => {
  try {
    const { data } = await client.get("article");
    console.log("[SUCCESS] getArticles");
    return data;
  } catch (e) {
    console.log(e, "[FAIL] getArticles");
    return null;
  }
};

export const createArticle = async (articleData) => {
  try {
    const { data } = await client.get("article");
    const date = new Date();
    await client.post("article", {
      ...articleData,
      id: data.length + 1,
      date: `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`,
      thumbnail: "",
    });
    console.log("[SUCCESS] createArticle");
  } catch (e) {
    console.log(e, "[FAIL] createArticle");
    return null;
  }
};
