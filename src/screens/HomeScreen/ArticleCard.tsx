import React from 'react';
import Card, {
  CardDate,
  CardDescription,
  CardMoreLink,
  CardTitle,
} from 'libs/components/card';
import formatDate from 'libs/time/formatDate';

const ArticleCard = (props: any) => {
  const { article } = props;

  return (
    <Card as="article">
      <CardTitle href={`/articles/${article.url}`}>
        {article.title}
      </CardTitle>
      <CardDate as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </CardDate>
      <CardDescription>{article.description}</CardDescription>
      <CardMoreLink>Read article</CardMoreLink>
    </Card>
  );
};

export default ArticleCard;
