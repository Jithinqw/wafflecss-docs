import { useState } from 'react';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import SideBar from './components/Sidebar/Sidebar';

const Installation = () => {
    const [toggleMobileHeader, setToggleMobileHeader] = useState<boolean>(false);

    return (
        <>
            <Header />
            <SideBar />
            <MainContainer />
        </>
    )
}

export default Installation;
