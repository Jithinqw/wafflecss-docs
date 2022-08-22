import { 
    Image, Heading, 
    LegalText, 
} from 'wafflecss';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Utilities } from '../../api/utilities';
import waffleConstants from '../../api/constants';

const NavBar = () => {

    /**
     * @function resolveImageSize
     * @returns {string}
     */
    const resolveImageSize = ():string => {
        const screensize = Utilities.resolveScreenSize();
        switch(screensize) {
            case 'desktop':
                return '50px';
            case 'mobile':
                return '40px';
            case 'tablet':
                return '30px';
            default:
                return '40px';
        }
    }

    const resolveIconSize = () => {
        const screensize = Utilities.resolveScreenSize();
        switch(screensize) {
            case 'desktop':
                return '2x';
            case 'mobile':
                return '1x';
            case 'tablet':
                return '2x';
            default:
                return '2x';
        }
    }

    /**
     * @function githubClickEvent
     */
    const githubClickEvent = ():void => {
        window.open(
            'https://github.com/Jithinqw/wafflecss',
            '_blank'
        );
    }

    /**
     * @function storybookClickEvent
     */
    const storybookClickEvent = ():void => {
        window.open(
            'https://wafflecss-jithinqw.vercel.app/',
            '_blank'
        );
    }

    /**
     * @function keyDowngithubClickEvent
     * @param {React.KeyboardEvent<HTMLDivElement>} e 
     */
    const keyDowngithubClickEvent = (
            e: React.KeyboardEvent<HTMLDivElement>
        ):void => {
        if(e.key === 'Enter') {
            githubClickEvent();
        }
    }

    /**
     * @function keyDownstorybookClickEvent
     * @param {React.KeyboardEvent<HTMLDivElement>} e  
     */
    const keyDownstorybookClickEvent = (
            e: React.KeyboardEvent<HTMLDivElement>
        ):void => {
        if(e.key === 'Enter') {
            storybookClickEvent();
        }
    }
    
    return (
        <>
            <div className='navBarContainer'>
                <div className='navBarWrapper'>
                    <a href='/' className='navBara'>
                        <Image 
                            data={{
                                imageSrc: waffleConstants.mainImage,
                                alt: 'WaffleCSS home image',
                                height: resolveImageSize(),
                                width: resolveImageSize()
                            }}
                        />
                    </a>
                    <Heading 
                        data={{
                            headingText: 'WaffleCSS'
                        }}
                        options={{
                            style: 'normal',
                            weight: 'normal',
                            size: 'extralarge'
                        }}
                    />
                    <div className='navBarRight'>
                        <div 
                            className='navBariconWrapper' 
                            role={'link'}
                            tabIndex={1}
                        >
                            <LegalText 
                                data={{
                                    displayText: 'v1.0.46'
                                }}
                                options={{
                                    className: 'githubIcon'
                                }}
                            />
                        </div>
                        <div 
                            className='navBariconWrapper' 
                            role={'link'}
                            tabIndex={1}
                            onKeyDown={keyDowngithubClickEvent}
                        >
                            <LegalText 
                                data={{
                                    displayText: 'Github'
                                }}
                                events={{
                                    onClick: githubClickEvent
                                }}
                                options={{
                                    className: 'githubIcon'
                                }}
                            />
                        </div>
                        <div 
                            className='navBariconWrapper' 
                            role={'link'}
                            tabIndex={1}
                            onKeyDown={keyDowngithubClickEvent}
                        >
                            <LegalText 
                                data={{
                                    displayText: 'Docs'
                                }}
                                events={{
                                    onClick: githubClickEvent
                                }}
                                options={{
                                    className: 'githubIcon'
                                }}
                            />
                        </div>
                        <div 
                            className='storybook'
                            role={'link'}
                            tabIndex={1}
                            onKeyDown={keyDownstorybookClickEvent}
                        >
                            <LegalText 
                                data={{
                                    displayText: 'Story Book'
                                }}
                                events={{
                                    onClick: storybookClickEvent
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
