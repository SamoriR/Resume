import React from 'react';
import NavigationBar from './Bar';
import NavigationFooter from './Footer';

const NavigationWrapper = (props: any) => {
  const { children } = props;

  return (
    <>
      <NavigationBar />
      { children }
      <NavigationFooter />
    </>
  );
};

export default NavigationWrapper;
