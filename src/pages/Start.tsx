import Footer from "../common/Footer/Footer";
import NavBar from "../common/NavBar/NavBar";
import SideBar from "../common/SideBar/SideBar";
import { Drawer } from "wafflecss";
import { Utilities } from "../api/utilities";
import { useEffect } from "react";
import "./Home.css";

const GetStart = () => {

    useEffect(() => {
        Utilities.titleApi("Get Started - WaffleCSS");
    }, []);

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
                    width: Utilities.resolveSideBarSize(),
                }}
            />
            <div className="contentContainer">
                asdasd
            </div>
            <Footer />
        </>
    )
}

export default GetStart;
