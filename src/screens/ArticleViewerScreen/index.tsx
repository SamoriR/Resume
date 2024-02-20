import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import NavigationWrapper from 'libs/components/navigation';
import ArticleDocument from 'libs/articles/ArticleDocument';
import { getArticleFromId } from 'libs/articles';
import Container from 'libs/components/Container';

const ArticleViewerScreen = () => {
  const { articleId } = useParams<{ articleId?: string }>();

  useEffect(() => {
    document.title = 'Articles - Samori Roberts';
  });

  const article = useMemo(() => {
    if (!articleId) {
      return undefined;
    }

    const currentArticle = getArticleFromId(articleId);
    return currentArticle;
  }, [articleId]);

  if (!article) {
    return null;
  }

  return (
    <NavigationWrapper>
      <Container outerClassName="mt-16 sm:mt-32">

        <ArticleDocument
          leading={article.leading}
          heading={article.heading}
          content={article.content}
        />
      </Container>
    </NavigationWrapper>
  );
};

export default ArticleViewerScreen;
