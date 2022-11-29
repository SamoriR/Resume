import React from 'react';
import Container from 'libs/components/Container';

import Avatar from './Avatar';
import DarkModeSwitcher from './DarkModeSwitcher';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';

const NAVIGATION_ROUTES = [
  'about',
  'articles',
  'projects',
];

const NavigationBar = () => (
  <header
    className="pointer-events-none relative z-50 flex flex-col"
  >
    <div
      className="top-0 z-10 h-16 pt-6"
    >
      <Container
        outerClassName="w-full"
      >
        <div className="relative flex gap-4">
          <div className="flex flex-1">
            <Avatar />
          </div>
          <div className="flex flex-1 justify-end md:justify-center">
            <MobileNavBar className="pointer-events-auto md:hidden" routes={NAVIGATION_ROUTES} />
            <DesktopNavBar className="pointer-events-auto hidden md:block" routes={NAVIGATION_ROUTES} />
          </div>
          <div className="flex justify-end md:flex-1">
            <div className="pointer-events-auto">
              <DarkModeSwitcher />
            </div>
          </div>
        </div>
      </Container>
    </div>
  </header>
);

export default NavigationBar;
