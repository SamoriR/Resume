import React from 'react';
import ArticleDocumentNode from './ArticleDocumentNode';
import { ArticleNode } from './types';

const ArticleDocument = ({
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
        <ArticleDocumentNode node={documentNode} />
      ))}
    </div>
  </div>
);

export default ArticleDocument;
