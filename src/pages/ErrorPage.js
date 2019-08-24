import React from 'react';
import Header from '../components/Header';
import Slogan from '../components/Slogan';

const ErrorPage = () => {
  return (
    <Header>
      <Slogan title="404" subtitle="Page not found" />
    </Header>
  );
}

export default ErrorPage;