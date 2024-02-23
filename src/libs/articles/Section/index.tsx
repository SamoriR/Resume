import React, { useMemo } from 'react';
import { ArticleNode } from '../types';

const ArticleSection = ({ node }: { node: ArticleNode }) => {
  const { type, data } = node;

  const Node = useMemo(() => {
    switch (type) {
      case 'heading':
        return (
          <div className="pt-8 font-bold text-2xl">
            {data}
          </div>
        );
      case 'text':
      default:
        return (
          <div className="pt-4">
            {data}
          </div>
        );
    }
  }, [type, data]);

  return Node;
};

export default ArticleSection;
