import { Heading, Link } from 'wafflecss';
import NavBar from '../common/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useEffect } from 'react';
import { Utilities } from '../api/utilities';

const NotFound = () => {
    const history = useNavigate();

    useEffect(() => {
        Utilities.titleApi('NotFound - WaffleCSS');
    }, []);

    const redirectToHome = () => {
        history('/');
    }

    return (
        <div>
            <NavBar />
            <div className='wrapper'>
                <Heading 
                    data={{
                        headingText: "Looks like you hit a road block. Please click to go \n"
                    }}
                    options={{
                        size: 'extralarge'
                    }}
                />
                <Link 
                    data={{
                        displayText: 'Home',
                        isDisabled: true
                    }}
                    options={{
                        underline: true,
                        size: 'md',
                    }}
                    events={{
                        onClick: redirectToHome
                    }}
                />
            </div>
            <div className='wrapper'>
                <Heading 
                    data={{
                        headingText: "Sorry for not adding any fancy animations here."
                    }}
                    options={{
                        size: 'large'
                    }}
                />
            </div>
        </div>
    )
}

export default NotFound;