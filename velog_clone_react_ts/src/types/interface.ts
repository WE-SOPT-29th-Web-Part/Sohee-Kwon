export interface Article {
  id?: string;
  title: string;
  body: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  date?: string;
}

export interface ImageFile {
  key: string;
  url: string;
}