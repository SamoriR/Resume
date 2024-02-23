import React, { useEffect, useMemo } from 'react';

import { getLatestArticles } from 'libs/articles';
import { Article } from 'libs/articles/types';
import Container from 'libs/components/Container';
import Social from 'libs/components/social';
import NavigationWrapper from 'libs/components/navigation';

import PhotoReel from './PhotoReel';
import ArticleCard from './ArticleCard';
// import NewsletterCard from './NewsletterCard';
import ResumeCard from './ResumeCard';

export default function Home() {
  useEffect(() => {
    document.title = 'Samori Roberts';
  });

  const twoLatestArticles = useMemo(() => getLatestArticles(2), []);

  return (
    <NavigationWrapper>
      <Container outerClassName="mt-9">
        <div className="max-w-2xl">
          <h1 className="mt-20 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer, Founder, and Amateur Quant.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            My name is Samori Roberts, graduate of Morehouse College, class of 2018,
            and Seattle based Software Engineer. I&apos;m a Microsoft Alumni that loves
            working with early-stage start-ups as a contractor, advisor, and leader.
            (And yes I did take those pictures of Travis Scott and J-Cole below!)
          </p>
          <div className="mt-6 flex gap-6">
            <Social.InstagramLink />
            <Social.GitHubLink />
            <Social.LinkedInLink />
          </div>
        </div>
      </Container>

      <PhotoReel />

      <Container outerClassName="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {
              twoLatestArticles.map((article: Article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            }
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <NewsletterCard /> */}
            <ResumeCard />
          </div>
        </div>
      </Container>
    </NavigationWrapper>
  );
}
