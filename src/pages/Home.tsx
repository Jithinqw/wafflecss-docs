import './Home.css';
import NavBar from '../common/NavBar/NavBar';
import { useEffect } from 'react';
import { Utilities } from '../api/utilities';
import Footer from '../common/Footer/Footer';

const Home = () => {

    useEffect(() => {
        Utilities.titleApi('Home - WaffleCSS');
    }, []);

    return (
        <>
            
            <NavBar />
            <div>dsfsdfsdf</div>
            <Footer />
        </>
    )
}

export default Home;