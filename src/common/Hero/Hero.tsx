import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCompass, faHeart, faHand } from '@fortawesome/free-solid-svg-icons';
import { Heading, Button } from 'wafflecss';
import waffleCMS from '../../api/cms';
import { Utilities } from '../../api/utilities';
import './Hero.css';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

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
                return 'md';
            default:
                return 'md';
        }
    }

    const resolveIconSize = (): SizeProp => {
        const screenSize = Utilities.resolveScreenSize();
        switch(screenSize) {
            case 'desktop':
                return "3x";
            case 'mobile':
                return "1x";
            case 'tablet':
                return "2x";
            default:
                return "2x";
        }
    }

    const redirectToGithub = () => {
        window.open('https://github.com/Jithinqw/wafflecss');
    }

    const redirectToDoc = () => {
        window.open('');
    }

    /**
     * @function resolveIcon
     * @param {number} i 
     * @returns {IconDefinition}
     */
    const resolveIcon = (i: number) => {
        switch(i) {
            case 0:
                return faFire;
            case 1:
                return faCompass;
            case 2:
                return faHeart;
            default:
                return faHand;
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
                            displayText: Object.values(waffleCMS.buttonCMS)[1].getStartedCMS
                        }}
                        options={{
                            size: resolveButtonSize(),
                            variants: 'primary'
                        }}
                        events={{
                            onClick: redirectToDoc
                        }}
                    />
                </div>
                <div className='buttonWCover'>
                    <Button 
                        data={{
                            displayText: Object.values(waffleCMS.buttonCMS)[0].githubCMS
                        }}
                        options={{
                            size: resolveButtonSize(),
                            variants: 'success'
                        }}
                        events={{
                            onClick: redirectToGithub
                        }}
                    />
                </div>
            </div>
            <div className='heroFeaturesContainer'>
                {
                    waffleCMS.features && 
                    waffleCMS.features.length > 0 &&
                    Object.keys(waffleCMS.features).map((e, i) => {
                        return (
                            <div key={i}>
                                <div className='heroIconContainer'>
                                    <FontAwesomeIcon 
                                        icon={resolveIcon(i)}
                                        color={'grey'}
                                        size={resolveIconSize()}
                                    />
                                </div>
                                <div className='heroIconJustify'>
                                    <Heading
                                        data={{
                                            headingText: Object.values(waffleCMS.features)[i].heading
                                        }}
                                        options={{
                                            size: 'normal',
                                            headingColor: 'black',
                                            className: 'heroIconHeading'
                                        }}
                                    />
                                    <Heading
                                        data={{
                                            headingText: Object.values(waffleCMS.features)[i].headingExplain
                                        }}
                                        options={{
                                            size: 'small',
                                            headingColor: 'black',
                                            className: 'heroIconExplain'
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Hero;
