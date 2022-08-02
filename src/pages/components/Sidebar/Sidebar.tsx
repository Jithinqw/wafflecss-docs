import { useState } from 'react';
import './Sidebar.css';
import { Heading, LegalText } from 'wafflecss';
import { UrlConstants } from '../../../api/constants';
import { Utilities } from '../../../api/utils';

const SideBar = () => {

    const [startToggle, setStartToggle] = useState<boolean>(false);
    const [basicToggle, setBasicToggle] = useState<boolean>(false);
    const [layoutToggle, setLayoutToggle] = useState<boolean>(false);
    const [promotionsToggle, setPromotionsToggle] = useState<boolean>(false);
    const [commonToggle, setCommonToggle] = useState<boolean>(false);

    /**
     * @function resolveHeading
     * @param {string} heading 
     * @returns {string}
     */
    const resolveHeading = (heading: string): string => {
        return heading.replace(/([A-Z])/g, ' $1').trim();
    }

    return (
        <div className='sidenav'>
            <div className='sidenavContainerItem'>
                <LegalText 
                    data={{
                        displayText: 'WaffleCSS'
                    }}
                    options={{
                        style: {
                            color: 'white'
                        },
                        legalTextSize: 'lg'
                    }}
                />
            </div>
            <div className='sidenavContainerItem' onClick={() => setStartToggle(!startToggle)}>
                <Heading 
                    data={{
                        headingText: 'Getting Started'
                    }} 
                    options={{
                        headingColor: 'pink',
                        size: Utilities.resolveHeadingSize(Utilities.resolveScreenSize())
                    }}
                />
                {
                    startToggle && Object.keys(UrlConstants.start).map((e, i) => {
                        return (
                            <a href={e.toString().toLowerCase()} key={i}>
                                <LegalText 
                                    data={{
                                        displayText: resolveHeading(e.charAt(0).toUpperCase() + e.slice(1))
                                    }}
                                    options={{
                                        style: {
                                            color: 'white'
                                        }
                                    }}
                                />
                            </a>
                        );
                    })
                }
            </div>
            <div className='sidenavContainerItem' onClick={() => setBasicToggle(!basicToggle)}>
                <Heading 
                    data={{
                        headingText: 'Basic'
                    }} 
                    options={{
                        headingColor: 'pink',
                        size: Utilities.resolveHeadingSize(Utilities.resolveScreenSize())
                    }}
                />
                {
                    basicToggle && Object.keys(UrlConstants.basic).map((e: string, i: number) => {
                        return (
                            <a href={e.toString().toLowerCase()} key={i}>
                                <LegalText 
                                    data={{
                                        displayText: resolveHeading(e.charAt(0).toUpperCase() + e.slice(1))
                                    }}
                                    options={{
                                        style: {
                                            color: 'white'
                                        }
                                    }}
                                />
                            </a>
                        );
                    })
                }
            </div>
            <div className='sidenavContainerItem' onClick={() => setLayoutToggle(!layoutToggle)}>
                <Heading 
                    data={{
                        headingText: 'Layout'
                    }} 
                    options={{
                        headingColor: 'pink',
                        size: Utilities.resolveHeadingSize(Utilities.resolveScreenSize())
                    }}
                />
                {
                    layoutToggle && Object.keys(UrlConstants.layout).map((e, i) => {
                        return (
                            <a href={e.toString().toLowerCase()} key={i}>
                                <LegalText 
                                    data={{
                                        displayText: resolveHeading(e.charAt(0).toUpperCase() + e.slice(1))
                                    }}
                                    options={{
                                        style: {
                                            color: 'white'
                                        }
                                    }}
                                />
                            </a>
                        );
                    })
                }
            </div>
            <div className='sidenavContainerItem' onClick={() => setPromotionsToggle(!promotionsToggle)}>
                <Heading 
                    data={{
                        headingText: 'Promotions'
                    }} 
                    options={{
                        headingColor: 'pink',
                        size: Utilities.resolveHeadingSize(Utilities.resolveScreenSize())
                    }}
                />
                {
                    promotionsToggle && Object.keys(UrlConstants.promotions).map((e, i) => {
                        return (
                            <a href={e.toString().toLowerCase()} key={i}>
                                <LegalText 
                                    data={{
                                        displayText: resolveHeading(e.charAt(0).toUpperCase() + e.slice(1))
                                    }}
                                    options={{
                                        style: {
                                            color: 'white'
                                        }
                                    }}
                                />
                            </a>
                        );
                    })
                }
            </div>
            <div className='sidenavContainerItem' onClick={() => setCommonToggle(!commonToggle)}>
                <Heading 
                    data={{
                        headingText: 'Common'
                    }} 
                    options={{
                        headingColor: 'pink',
                        size: Utilities.resolveHeadingSize(Utilities.resolveScreenSize())
                    }}
                />
                {
                    commonToggle && Object.keys(UrlConstants.common).map((e, i) => {
                        return (
                            <a href={e.toString().toLowerCase()} key={i}>
                                <LegalText 
                                    data={{
                                        displayText: resolveHeading(e.charAt(0).toUpperCase() + e.slice(1))
                                    }}
                                    options={{
                                        style: {
                                            color: 'white'
                                        }
                                    }}
                                />
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBar;
