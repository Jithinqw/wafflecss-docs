import './Footer.css';
import { LegalText } from 'wafflecss';
import constants from '../../api/constants';
import { Utilities } from '../../api/utilities';

const Footer = () => {

    const resolveLegalSize = () => {
        const screensize = Utilities.resolveScreenSize();
        switch(screensize) {
            case 'desktop':
                return 'lg';
            case 'mobile':
                return 'sm';
            case 'tablet':
                return 'lg';
            default:
                return 'lg';
        }
    }

    return (
        <>
            <div className='footer'>
                <div>
                    <sup>This site is made with WaffleCSS</sup>
                </div>
                <div>
                    <LegalText 
                        data={{
                            displayText: `Proudly made in 🇮🇳 by ${constants.mainAuthor}`
                        }}
                        options={{
                            legalTextSize: resolveLegalSize(),
                            style: {
                                color: 'white'
                            }
                        }}
                        
                    />
                </div>
            </div>
        </>
    )
}

export default Footer;