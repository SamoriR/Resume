import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import Container from 'libs/components/Container';
import SocialIcons from 'libs/components/social/icons';
import SocialLink from 'libs/components/social/SocialLink';
import classnames from 'classnames';

import image1 from 'res/photos/image-1.jpg';
import image2 from 'res/photos/image-2.jpg';
import image3 from 'res/photos/image-3.jpg';
import image4 from 'res/photos/image-4.jpg';
import image5 from 'res/photos/image-5.jpg';

import ArticleCard from './ArticleCard';
import NewsletterCard from './NewsletterCard';
// import ResumeCard from './ResumeCard';

const {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} = SocialIcons;

function Photos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image}
            className={classnames(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const data = useLoaderData();
  const { articles } = data as any;

  useEffect(() => {
    document.title = 'Samori Roberts';
  });
  console.log(data);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
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
            {/* <ResumeCard /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
