import {
    Heading
} from 'wafflecss';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="wrapper">
                <Heading 
                    data={{
                        headingText: 'We will be back with Docs.'
                    }}
                    options={{
                        size: 'extralarge'
                    }}
                />
            </div>
            <div className='wrapper'>
                <Heading 
                    data={{
                        headingText: 'These pages are build with WaffleCSS, eventhough it is still in Beta.'
                    }}
                    options={{
                        size: 'large'
                    }}
                />
            </div>
        </div>
    )
}

export default Home;