import {Image, Heading, LegalText} from 'wafflecss';
import './NavBar.css';
import {Utilities} from '../../api/utilities';
import waffleConstants from '../../api/constants';
import waffleCMS from '../../api/cms';

const NavBar = () => {
  /**
   * @function githubClickEvent
   * @returns {void}
   */
  const githubClickEvent = (): void => {
    window.open('https://github.com/Jithinqw/wafflecss', '_blank');
  };

  /**
   * @function storybookClickEvent
   * @returns {void}
   */
  const storybookClickEvent = (): void => {
    window.open('https://wafflecss-jithinqw.vercel.app/', '_blank');
  };

  /**
   * @function keyDowngithubClickEvent
   * @param {React.KeyboardEvent<HTMLDivElement>} e
   * @returns {void}
   */
  const keyDowngithubClickEvent = (
    e: React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    if (e.key.toLowerCase() === 'enter') {
      e.preventDefault();
      githubClickEvent();
    }
  };

  /**
   * @function keyDownstorybookClickEvent
   * @param {React.KeyboardEvent<HTMLDivElement>} e
   * @returns {void}
   */
  const keyDownstorybookClickEvent = (
    e: React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      storybookClickEvent();
    }
  };

  return (
    <>
      <div className="navBarContainer">
        <div className="navBarWrapper">
          <a href="/" className="navBara">
            <Image
              data={{
                imageSrc: waffleConstants.mainImage,
                alt: 'WaffleCSS home image',
                height: Utilities.resolveImageSize(),
                width: Utilities.resolveImageSize(),
              }}
            />
          </a>
          <Heading
            data={{
              headingText: waffleCMS.mainAppTitle,
            }}
            options={{
              style: 'normal',
              weight: 'normal',
              size: 'extralarge',
            }}
          />
          <div className="navBarRight">
            <div className="navBariconWrapper" role={'link'} tabIndex={1}>
              <LegalText
                data={{
                  displayText: 'v1.0.46',
                }}
                options={{
                  className: 'githubIcon',
                }}
              />
            </div>
            <div
              className="navBariconWrapper"
              role={'link'}
              tabIndex={1}
              onKeyDown={keyDowngithubClickEvent}
            >
              <LegalText
                data={{
                  displayText: 'Github',
                }}
                events={{
                  onClick: githubClickEvent,
                }}
                options={{
                  className: 'githubIcon',
                }}
              />
            </div>
            <div
              className="navBariconWrapper"
              role={'link'}
              tabIndex={1}
              onKeyDown={keyDowngithubClickEvent}
            >
              <LegalText
                data={{
                  displayText: 'Docs',
                }}
                events={{
                  onClick: githubClickEvent,
                }}
                options={{
                  className: 'githubIcon',
                }}
              />
            </div>
            <div
              className="storybook"
              role={'link'}
              tabIndex={1}
              onKeyDown={keyDownstorybookClickEvent}
            >
              <LegalText
                data={{
                  displayText: 'Story Book',
                }}
                events={{
                  onClick: storybookClickEvent,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
