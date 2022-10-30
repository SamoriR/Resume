import React from 'react';
import {
  Link,
} from 'react-router-dom';

const SocialLink = (props: any) => {
  const { icon: Icon, to } = props;
  return (
    <Link to={to} className="group -m-1 p-1">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
};

export default SocialLink;
