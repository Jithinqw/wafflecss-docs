import { Heading } from 'wafflecss';
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
                <sup>
                    <Heading 
                        data={{
                            headingText: 'Beta'
                        }}
                        options={{
                            size: 'normal',
                            weight: 'bold',
                            style: 'italics'
                        }}
                    />
                </sup>
            </div>
            <div className='wrapper'>
                <Heading 
                    data={{
                        headingText: 'These pages are build with WaffleCSS.'
                    }}
                    options={{
                        size: 'large',
                    }}
                />
            </div>
            <div className='wrapper'>
                <a href='https://github.com/Jithinqw/wafflecss'>
                    Github
                </a>
            </div>
        </div>
    )
}

export default Home;