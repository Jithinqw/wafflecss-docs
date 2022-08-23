import { Heading, Button } from 'wafflecss';
import { Utilities } from '../../api/utilities';
import './Hero.css';

const Hero = () => {

    /**
     * @function resolveButtonSize
     * @returns {string}
     */
    const resolveButtonSize = ():string => {
        const screenSize = Utilities.resolveScreenSize();
        switch(screenSize) {
            case 'desktop':
                return 'lg';
            case 'mobile':
                return 'sm';
            case 'tablet':
                return 'lg';
            default:
                return 'md';
        }
    }

    return (
        <>
            <div className='heroMainTextContainer'>
                <Heading 
                    data={{
                        headingText: 'A Fast, Composable & Instant React components.'
                    }}
                    options={{
                        size: 'extralarge',
                        headingColor: 'black',
                        className: 'heroMainText'
                    }}
                />
            </div>
            <div className='buttonCover'>
                <div className='buttonWCover'>
                    <Button 
                        data={{
                            displayText: 'Get Started'
                        }}
                        options={{
                            size: resolveButtonSize(),
                            variants: 'primary'
                        }}
                        events={{
                        }}
                    />
                </div>
                <div className='buttonWCover'>
                    <Button 
                        data={{
                            displayText: 'Github'
                        }}
                        options={{
                            size: resolveButtonSize(),
                            variants: 'success'
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Hero;
