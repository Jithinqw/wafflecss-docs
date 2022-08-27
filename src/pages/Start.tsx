import Footer from "../common/Footer/Footer";
import NavBar from "../common/NavBar/NavBar";
import SideBar from "../common/SideBar/SideBar";
import { Drawer } from 'wafflecss';
import { Utilities } from "../api/utilities";
import { useEffect } from "react";
import './Home.css';

const GetStart = () => {

    useEffect(() => {
        Utilities.titleApi('Get Started - WaffleCSS');
    }, []);

    /**
     * @function resolveSideBarSize
     * @returns {string}
     */
    const resolveSideBarSize = ():string => {
        const screensize = Utilities.resolveScreenSize();
        switch(screensize) {
            case 'desktop':
                return '250px';
            case 'mobile':
                return '135px';
            case 'tablet':
                return '200px';
            default:
                return '250px';
        }
    }

    return (
        <>
            <NavBar />
            <Drawer 
                data={{
                    isVisible: true,
                    children: (
                        <SideBar />
                    )
                }}
                options={{
                    width: resolveSideBarSize(),
                }}
            />
            <div>asdasdasd</div>
            <Footer />
        </>
    )
}

export default GetStart;
