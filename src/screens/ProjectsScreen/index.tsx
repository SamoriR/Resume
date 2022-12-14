import React, { useEffect } from 'react';

import NavigationWrapper from 'libs/components/navigation';
import Card, { CardLink, CardDescription } from 'libs/components/card';
import SimpleLayout from 'libs/components/SimpleLayout';
import logoCodexDF from 'res/logos/cdf.png';
import logoHumble from 'res/logos/humble.png';
import logoFeedback from 'res/logos/feedback.png';

import { LinkIcon } from '@heroicons/react/20/solid';

const projects = [
  {
    name: 'CodexDF',
    description:
      'Web3 tax and compliance software.',
    link: { href: 'https://www.crunchbase.com/organization/codexdf', label: 'crunchbase.com' },
    logo: logoCodexDF,
  },
  {
    name: 'Humble',
    description:
      'NFT marketplace built on the Flow blockchain',
    link: { href: '#', label: 'github.com' },
    logo: logoHumble,
  },
  {
    name: 'Feedback',
    description:
      'Social media statistics and networking platform.',
    link: { href: '#', label: 'github.com' },
    logo: logoFeedback,
  },
];

const ProjectsScreen = () => {
  useEffect(() => {
    document.title = 'Projects - Samori Roberts';
  });

  return (
    <NavigationWrapper>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <CardLink href={project.link.href}>{project.name}</CardLink>
              </h2>
              <CardDescription>{project.description}</CardDescription>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </NavigationWrapper>
  );
};

export default ProjectsScreen;
