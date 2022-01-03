import { AxiosResponse } from "axios";
import { client, imageClient } from "./client";
import { Article, ImageFile } from "../types/interface";

export const getArticles = async (): Promise<Article[] | null> => {
  try {
    const { data }: AxiosResponse<Article[]> = await client.get("/article");
    return data;
  } catch (e) {
    return null;
  }
};

export const getArticle = async (id: string): Promise<Article | null> => {
  try {
    const { data }: AxiosResponse<Article> = await client.get(`/article/${id}`);
    return data;
  } catch (e) {
    return null;
  }
};

export const createArticle = async (article: Article): Promise<boolean> => {
  try {
    await client.post("/article", article);
    return true;
  } catch (e) {
    return false;
  }
};

export const updateArticle = async (article: Article): Promise<boolean> => {
  try {
    await client.patch(`/article/${article.id}`, article);
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteArticle = async (articleId: string): Promise<boolean> => {
  try {
    await client.delete(`/article/${articleId}`);
    return true;
  } catch (e) {
    return false;
  }
};

export const uploadImage = async (imageFile: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    const response: AxiosResponse<ImageFile> = await imageClient.post(
      "/image",
      formData
    );
    return response?.data?.url;
  } catch (e) {
    return null;
  }
};
