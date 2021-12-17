import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const imageClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const getArticles = async () => {
  try {
    const { data } = await client.get("/article");
    console.log("[SUCCESS] getArticles");
    return data;
  } catch (e) {
    console.log("[FAIL] getArticles", e);
    return null;
  }
};

// export const createArticle = async (articleData) => {
//   try {
//     const { data } = await client.get("/article");
//     const date = new Date();
//     await client.post("article", {
//       ...articleData,
//       id: data.length + 1,
//       date: `${date.getFullYear()}년 ${
//         date.getMonth() + 1
//       }월 ${date.getDate()}일`,
//       thumbnail: "",
//     });
//     console.log("[SUCCESS] createArticle");
//   } catch (e) {
//     console.log("[FAIL] createArticle", e);
//     return null;
//   }
// };

export const createArticle = async (articleData) => {
  try {
    const { data } = await client.post("/article", articleData);
    console.log("[SUCCESS] createArticle");
    return data;
  } catch (e) {
    console.log("[FAIL] createArticle", e);
    return null;
  }
};

export const updateArticle = async (articleData) => {
  try {
    const { data } = await client.patch(
      `/article/${articleData.id}`,
      articleData
    );
    console.log("[SUCCESS] updateArticle");
    return data;
  } catch (e) {
    console.log("[FAIL] updateArticle", e);
    return null;
  }
};

// export const deleteArticle = async (articleId) => {
//   try {
//     const { data } = await client.get("/article");
//     data.filter((item) => item.id !== articleId - 1);
//     await client.delete("article");
//     console.log("[SUCCESS] deleteArticle", data);
//   } catch (e) {
//     console.log("[FAIL] deleteArticle", e);
//     return null;
//   }
// };

export const deleteArticle = async (articleId) => {
  try {
    const { data } = await client.delete(`/article/${articleId}`);
    console.log("[SUCCESS] deleteArticle");
    return data;
  } catch (e) {
    console.log("[FAIL] deleteArticle", e);
    return null;
  }
};

export const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    const response = await imageClient.post("/image", formData);
    return response.data.url;
  } catch (e) {
    console.log("[FAIL] uploadImage", e);
    return null;
  }
};
