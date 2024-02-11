export type ArticleNode = {
  type: 'text' | 'image' | 'heading'
  data: string;
};

export type Article = {
  leading: string;
  heading: string;
  subheading: string;
  content: ArticleNode[];
};
