import './SideBar.css';
import {Heading} from 'wafflecss';
import waffleCMS from '../../api/cms';
import {useNavigate} from 'react-router-dom';
import {Utilities} from '../../api/utilities';
import React from 'react';

/**
 * @function keyDownEvents
 * @param {React.KeyboardEvent<HTMLParagraphElement>} e
 */
const keyDownEvents = (e: React.KeyboardEvent<HTMLParagraphElement>): void => {
  if (e.key.toLowerCase() === 'enter') {
    e.preventDefault();
  }
};

const ResolveSideBarHeading = (e: any, i: number) => {
  const navigate = useNavigate();

  /**
   * @function navigateToComponentPage
   * @param pageUrl
   */
  const navigateToComponentPage = (pageUrl: string): void => {
    navigate(pageUrl);
  };

  return (
    <div key={i}>
      <Heading
        data={{
          headingText: Utilities.resolveHeading(e.componentType),
        }}
        options={{
          weight: 'bold',
          size: 'large',
          className: 'lineBreak',
        }}
        key={i}
      />
      {e.components &&
        Array.isArray(e.components) &&
        e.components.length > 0 &&
        e.components.map((item: any, index: number) => {
          return (
            <div key={index}>
              <span
                onClick={() => navigateToComponentPage(item?.componentLink)}
                role={'link'}
                tabIndex={0}
                title={item?.componentName}
              >
                <Heading
                  data={{
                    headingText: Utilities.resolveHeading(item?.componentName),
                  }}
                  options={{
                    className: 'pad',
                  }}
                  events={{
                    onkeydown: keyDownEvents,
                  }}
                />
              </span>
            </div>
          );
        })}
    </div>
  );
};

const SideBar = () => {
  return (
    <>
      <div className="sideBarContainer">
        {waffleCMS.components &&
          waffleCMS.components.length > 0 &&
          Object.values(waffleCMS.components).map((e, i) => {
            return ResolveSideBarHeading(e, i);
          })}
      </div>
    </>
  );
};

export default SideBar;
