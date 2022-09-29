import Footer from '../common/Footer/Footer';
import NavBar from '../common/NavBar/NavBar';
import SideBar from '../common/SideBar/SideBar';
import {Drawer} from 'wafflecss';
import {Utilities} from '../api/utilities';
import {useEffect} from 'react';
import './Home.css';

const Announcement = () => {
  useEffect(() => {
    Utilities.titleApi('Announcement - WaffleCSS');
  }, []);

  return (
    <>
      <NavBar />
      <Drawer
        data={{
          isVisible: true,
          children: <SideBar />,
        }}
        options={{
          width: Utilities.resolveSideBarSize(),
        }}
      />
      <div className="contentContainer">Announcement</div>
      <Footer />
    </>
  );
};

export default Announcement;
