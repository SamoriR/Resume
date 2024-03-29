import React, { useEffect } from 'react';
import Button from 'libs/components/button';

import { BriefcaseIcon, ArrowDownIcon } from '@heroicons/react/20/solid';
import logoMicrosoft from 'res/logos/microsoft.svg';
import logoCodexDF from 'res/logos/cdf.png';
import logoDescript from 'res/logos/descript.png';
import resumePdf from 'res/samori_roberts_resume.pdf';

const resume = [
  {
    company: 'Descript',
    title: 'Software Engineer',
    logo: logoDescript,
    start: '2023',
    end: '2024',
  },
  {
    company: 'CodexDF',
    title: 'Lead Software Engineer',
    logo: logoCodexDF,
    start: '2022',
    end: '2022',
  },
  {
    company: 'Microsoft',
    title: 'Software Engineer 2',
    logo: logoMicrosoft,
    start: '2018',
    end: '2022',
  },
];

const ResumeCard = () => {
  useEffect(() => {}, []);

  const openResume = () => {
    window.open(resumePdf);
  };

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <li key={role.title} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img src={role.logo} alt="" className="h-6" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${
                  role.end
                }`}
              >
                <time dateTime={role.start}>
                  {role.start}
                </time>
                {' '}
                <span aria-hidden="true">—</span>
                {' '}
                <time dateTime={role.end}>
                  {role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button onClick={openResume} variant="secondary" className="group mt-6 w-full">
        Open Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
};

export default ResumeCard;
