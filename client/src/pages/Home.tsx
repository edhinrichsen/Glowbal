import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import PortfolioGrid from '../components/PortfolioGrid';
import FilterAndSort from '../components/FilterAndSort';

import './Home.css';
import HomeHero from '../components/HomeHero';
import Loading from '../components/Loading';

function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header pageKey="home" />

      <HomeHero />

      <div className="grid-main-layout-primary">
        <FilterAndSort />
        <PortfolioGrid />
      </div>
    </div>
  );
}

export default Home;
