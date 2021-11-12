import axios from "axios";

export const client = axios.create({
  baseURL: "https://localhost:4000/",
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
    await client.post("article", {
      ...articleData,
      id: data.length,
      date: new Date(),
    });
    console.log("[SUCCESS] createArticle");
  } catch (e) {
    console.log(e, "[FAIL] createArticle");
    return null;
  }
};
