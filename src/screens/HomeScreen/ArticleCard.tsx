import React from 'react';
import { Article } from 'libs/articles/types';
import Card, {
  CardDate,
  CardDescription,
  CardMoreLink,
  CardTitle,
} from 'libs/components/card';
import formatDate from 'libs/time/formatDate';

const ArticleCard = ({
  article,
}: {
  article: Article;
}) => (
  <Card as="article">
    <CardTitle href={`/article/${article.id}`}>
      {article.title}
    </CardTitle>
    <CardDate as="time" dateTime={article.date} decorate>
      {formatDate(article.date)}
    </CardDate>
    <CardDescription>{article.description}</CardDescription>
    <CardMoreLink>Read article</CardMoreLink>
  </Card>
);

export default ArticleCard;
