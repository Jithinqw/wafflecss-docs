import waffleCMS from '../api/cms';
import {Utilities} from '../api/utilities';
import NavBar from '../common/NavBar/NavBar';
import SideBar from '../common/SideBar/SideBar';
import {Drawer} from 'wafflecss';
import Footer from '../common/Footer/Footer';
import './Home.css';
import {useEffect} from 'react';

const Button = () => {
  useEffect(() => {
    Utilities.titleApi('Button - WaffleCSS');
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
      <div className="contentContainer">Button</div>
      <Footer />
    </>
  );
};

export default Button;
