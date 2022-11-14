import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { useLocation } from 'react-router-dom';

import Container from 'libs/components/Container';

import clamp from './clamp';

import Avatar, { AvatarContainer, AvatarIcon } from './Avatar';
import DarkModeSwitcher from './DarkModeSwitcher';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';

type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

interface INavStyle {
  initial: boolean
  headerPosition: Position,
  headerInnerPosition: Position,
  headerHeight: string,
  headerTop: string,
  headerMB: string,
  avatarTop: string,
  avatarImageTransform: string,
  avatarBorderTransform: string,
  avatarBorderOpacity: string,
  contentOffset: string,
}

const NavigationBar = () => {
  const location = useLocation();
  const [navStyle, setNavStyle] = useState<INavStyle>({
    initial: true,
    headerPosition: 'relative' as Position,
    headerInnerPosition: 'relative' as Position,
    headerHeight: '',
    headerTop: '',
    headerMB: '',
    avatarTop: '',
    avatarImageTransform: '',
    avatarBorderTransform: '',
    avatarBorderOpacity: '',
    contentOffset: '',
  });
  const isHomePage = location.pathname === '/';

  const headerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  const updateStyles = useCallback(async () => {
    const downDelay = avatarRef.current?.offsetTop ?? 0;
    const upDelay = 64;

    const updateHeaderStyles = (style: INavStyle) => {
      const newNavStyle = style;
      if (headerRef === undefined || headerRef.current === undefined) {
        return style;
      }

      const { top, height } = headerRef.current!.getBoundingClientRect();
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      );

      if (style.initial) {
        newNavStyle.headerPosition = 'sticky' as Position;
      }

      newNavStyle.contentOffset = `${downDelay}px`;

      if (style.initial || scrollY < downDelay) {
        newNavStyle.headerHeight = `${downDelay + height}px`;
        newNavStyle.headerMB = `${-downDelay}px`;
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        newNavStyle.headerHeight = `${offset}px`;
        newNavStyle.headerMB = `${height - offset}px`;
      } else if (top === 0) {
        newNavStyle.headerHeight = `${scrollY + height}px`;
        newNavStyle.headerMB = `${-scrollY}px`;
      }

      // TODO: headerInnerPosition flickers which needs to be fixed
      console.log(top);
      console.log(scrollY);
      console.log(downDelay);
      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        console.log('hello');
        newNavStyle.headerInnerPosition = 'fixed' as Position;
        newNavStyle.headerTop = '';
        newNavStyle.avatarTop = '';
      } else {
        newNavStyle.headerInnerPosition = 'relative' as Position;
        newNavStyle.headerTop = '0px';
        newNavStyle.avatarTop = '0px';
      }

      return newNavStyle;
    };

    function updateAvatarStyles(style: INavStyle) {
      const newNavStyle = style;
      if (!isHomePage) {
        return style;
      }

      const fromScale = 1;
      const toScale = 36 / 64;
      const fromX = 0;
      const toX = 2 / 16;

      const scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      newNavStyle.avatarImageTransform = `translate3d(${x}rem, 0, 0) scale(${scale})`;

      const borderScale = 1 / (toScale / scale);
      const borderX = (-toX + x) * borderScale;
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      newNavStyle.avatarBorderTransform = borderTransform;
      newNavStyle.avatarBorderOpacity = scale === toScale ? '1' : '0';

      return newNavStyle;
    }

    const navStyleClone = structuredClone(navStyle);
    let newNavStyle = updateHeaderStyles(navStyleClone);
    newNavStyle = updateAvatarStyles(newNavStyle);
    newNavStyle.initial = false;

    setNavStyle(newNavStyle);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHomePage]);

  useEffect(() => {
    updateStyles();
    window.addEventListener('scroll', updateStyles, { passive: true });
    window.addEventListener('resize', updateStyles);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, [isHomePage, updateStyles]);

  console.log(navStyle);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: navStyle.headerHeight,
          marginBottom: navStyle.headerMB,
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              outerClassName="top-0 order-last -mb-3 pt-3"
              style={{ position: navStyle.headerPosition }}
            >
              <div
                className={`top-[var(${navStyle.avatarTop},theme(spacing.3))] w-full`}
                style={{ position: navStyle.headerInnerPosition }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 origin-left transition-opacity"
                    style={{
                      opacity: navStyle.avatarBorderOpacity,
                      transform: navStyle.avatarBorderTransform,
                    }}
                  />
                  <AvatarIcon
                    large
                    className="block h-16 w-16 origin-left"
                    style={{ transform: navStyle.avatarImageTransform }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: navStyle.headerPosition }}
        >
          <Container
            outerClassName={`top-[var(${navStyle.headerTop},theme(spacing.6))] w-full`}
            style={{ position: navStyle.headerInnerPosition }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                <Avatar />
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavBar className="pointer-events-auto md:hidden" />
                <DesktopNavBar className="pointer-events-auto hidden md:block" />
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
      {isHomePage && <div style={{ height: navStyle.contentOffset }} />}
    </>
  );
};

export default NavigationBar;
