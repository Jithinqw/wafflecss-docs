import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MobileHeader from './MobileHeader';

const Header = () => {
    const [toggleMobileHeader, setToggleMobileHeader] = useState<boolean>(false);

    return (
        <div>
            <div 
                className="headerMain" 
                onClick={() => setToggleMobileHeader(!toggleMobileHeader)}
            >
                <FontAwesomeIcon 
                    icon={faBars} 
                    size={'2x'}
                />
            </div>
            {
                toggleMobileHeader && (
                    <MobileHeader 
                        isVisible={toggleMobileHeader}
                    />
                )
            }
        </div>
    )
}

export default Header;

