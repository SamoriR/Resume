import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import NavigationWrapper from 'libs/components/navigation';
import SimpleLayout from 'libs/components/SimpleLayout';
import { IArticle } from 'libs/api/getArticles';

import ArticleCard from './ArticleCard';

const ArticlesScreen = () => {
  const articles = useLoaderData() as IArticle[];

  useEffect(() => {
    document.title = 'Articles - Samori Roberts';
  });

  return (
    <NavigationWrapper>
      <SimpleLayout
        title="Articles on software, quantitative finance, exercise, video games and everything else that brings me joy."
        intro="A collection of deep dives and tutorials on my personal and professional experiences."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </NavigationWrapper>
  );
};

export default ArticlesScreen;
