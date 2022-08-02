import './Header.css';

interface IMobileHeader {
    isVisible: boolean
}

const MobileHeader = (props: IMobileHeader) => {
    return (
        props.isVisible ? (
            <div className='mobileHeader'>
                sdfsdfsdf
            </div>
        ) : null
    )
}

export default MobileHeader;
