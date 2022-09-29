/* eslint-disable react/jsx-no-comment-textnodes */
import Footer from '../common/Footer/Footer';
import NavBar from '../common/NavBar/NavBar';
import SideBar from '../common/SideBar/SideBar';
import { Drawer, Heading, LegalText } from 'wafflecss';
import { Utilities } from '../api/utilities';
import { useEffect } from 'react';
import 'papperanimate';
import './Home.css';

const GetStart = () => {
  useEffect(() => {
    Utilities.titleApi('Get Started - WaffleCSS');
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
      <div className="mainContentWrapper">
        <div className='papperanimate_animated papperanimate_pulse'>
            <Heading
                data={{
                headingText: 'Getting started',
                }}
                options={{
                size: Utilities.resolveHeadingSize(),
                }}
            />

        </div>
        <LegalText
          data={{
            displayText:
              'The simplest and fastest way to get up and running with WaffleCSS is with the NPM tool.',
          }}
          options={{
            legalTextSize: Utilities.resolveLegalSize(),
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default GetStart;
