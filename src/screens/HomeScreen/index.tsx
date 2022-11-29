import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import Container from 'libs/components/Container';
import SocialIcons from 'libs/components/social/icons';
import SocialLink from 'libs/components/social/SocialLink';
import NavigationWrapper from 'libs/components/navigation';
import { IArticle } from 'libs/api/getArticles';

import PhotoReel from './PhotoReel';
import ArticleCard from './ArticleCard';
import NewsletterCard from './NewsletterCard';
import ResumeCard from './ResumeCard';

const {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} = SocialIcons;

export default function Home() {
  const articles = useLoaderData() as IArticle[];

  useEffect(() => {
    document.title = 'Samori Roberts';
  });

  return (
    <NavigationWrapper>
      <Container outerClassName="mt-9">
        <div className="max-w-2xl">
          <h1 className="mt-20 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer, Technical Advisor, and Hobbyist.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            My name is Samori Roberts, graduate of Morehouse College, class of 2018,
            and Seattle based Software Engineer. I&apos;m a Microsoft Alumni that loves
            working with early-stage start-ups as a contractor, advisor, and leader.
            (And yes I did take those pictures of Travis Scott and J-Cole below!)
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              to="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              to="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              to="https://github.com/SamoriR"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              to="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      <PhotoReel />

      <Container outerClassName="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {
              articles
              && articles.map((article: any) => (
                <ArticleCard key={article.slug} article={article} />
              ))
            }
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <NewsletterCard />
            <ResumeCard />
          </div>
        </div>
      </Container>
    </NavigationWrapper>
  );
}
