import React from 'react';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import Services from '../components/Services';
import Delivery from '../components/Delivery';

const Home = () => {
  return (
    <>
      <Header>
        <Slogan title="Prepare to visit Magic World" />
      </Header>
      <section className="motto">
        <Slogan subtitle="Best handmade items of the highest quality." />
      </section>
      <Services />
      <Delivery />
    </>

  );
}

export default Home;