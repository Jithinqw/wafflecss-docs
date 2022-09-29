import './Home.css';
import NavBar from '../common/NavBar/NavBar';
import {useEffect, useState} from 'react';
import {Utilities} from '../api/utilities';
import Footer from '../common/Footer/Footer';
import Hero from '../common/Hero/Hero';
import {useSearchParams} from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    Utilities.titleApi('Home - WaffleCSS');
  }, []);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams(currentParams);
    if (currentParams.hasOwnProperty('lang')) {
      window && window.localStorage.setItem('lang', currentParams['sort']);
    }
  }, [searchParams]);

  return (
    <>
      <NavBar />
      <div className="homeMainContainer">
        <Hero />
      </div>
      <Footer />
    </>
  );
};

export default Home;
