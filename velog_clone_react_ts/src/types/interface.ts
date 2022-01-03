export type Keys = "title" | "body" | "summary" | "tags" | "thumbnail" | "date";

export interface Article {
  id?: string;
  title: string;
  body: string;
  summary: string;
  thumbnail?: string;
  tags: string[];
  date?: string;
}

export interface ImageFile {
  key: string;
  url: string;
}

export const isArticle = (data: unknown): data is Article => {
  return (data as Article)?.title !== undefined;
};
