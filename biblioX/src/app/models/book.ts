export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  category?: string;
  favorite?: boolean;
  year: number;
}
