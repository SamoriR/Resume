import React from 'react';
import ArticleSection from './Section';
import { ArticleNode } from './types';

const ArticlePage = ({
  leading,
  heading,
  content,
}: {
  leading: string;
  heading: string;
  content: ArticleNode[]
}) => (
  <div className="">
    <p className="text-base font-semibold leading-7 text-teal-500">{leading}</p>
    <h1 className="pt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">{heading}</h1>
    <div className="py-6 lg:px-18 text-gray-200 text-justify">
      {content.map((documentNode) => (
        <ArticleSection node={documentNode} />
      ))}
    </div>
  </div>
);

export default ArticlePage;
