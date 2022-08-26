import './Home.css';
import NavBar from '../common/NavBar/NavBar';
import { useEffect } from 'react';
import { Utilities } from '../api/utilities';
import Footer from '../common/Footer/Footer';
import Hero from '../common/Hero/Hero';

const Home = () => {

    useEffect(() => {
        Utilities.titleApi('Home - WaffleCSS');
    }, []);

    return (
        <>
            <NavBar />
            <div className='homeMainContainer'>
                <Hero />
            </div>
            <Footer />
        </>
    )
}

export default Home;