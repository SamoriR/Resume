import React from 'react';
import Card, {
  CardEyebrow,
  CardDescription,
  CardMoreLink,
  CardTitle,
} from 'libs/components/card';
import formatDate from 'libs/time/formatDate';

const ArticleCard = (props: any) => {
  const { article } = props;

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <CardTitle href={`/articles/${article.slug}`}>
          {article.title}
        </CardTitle>
        <CardEyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </CardEyebrow>
        <CardDescription>{article.description}</CardDescription>
        <CardMoreLink>Read article</CardMoreLink>
      </Card>
      <CardEyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </CardEyebrow>
    </article>
  );
};

export default ArticleCard;
