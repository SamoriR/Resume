import React from 'react';
import {
  Link,
} from 'react-router-dom';

const SocialLink = (props: any) => {
  const { icon: Icon, to, children } = props;
  return (
    <Link to={to} className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      <span className="ml-4">{children}</span>
    </Link>
  );
};

export default SocialLink;
