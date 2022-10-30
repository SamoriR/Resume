import React from 'react';
import classnames from 'classnames';

const OuterContainer = (props: any) => {
  const { className, children } = props;

  return (
    <div className={classnames('sm:px-8', className)}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
};

const InnerContainer = (props: any) => {
  const { className, children } = props;

  return (
    <div
      className={classnames('relative px-4 sm:px-8 lg:px-12', className)}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
};

const Container = (props: any) => {
  const { children, innerClassName, outerClassName } = props;

  return (
    <OuterContainer className={outerClassName}>
      <InnerContainer className={innerClassName}>
        {children}
      </InnerContainer>
    </OuterContainer>
  );
};

export default Container;
