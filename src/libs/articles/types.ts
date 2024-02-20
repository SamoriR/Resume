export type ArticleNode = {
  type: 'text' | 'image' | 'heading'
  data: string;
};

export type Article = {
  id: string;
  date: string;
  leading: string;
  heading: string;
  description: string;
  content: ArticleNode[];
};
