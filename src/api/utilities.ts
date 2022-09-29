/**
 * @class Utilities
 */
export class Utilities {
  /**
   * @function resolveScreenSize
   * @returns {string}
   */
  static resolveScreenSize(): string {
    const width: number = window && window.innerWidth;
    if (width < 428) {
      return 'mobile';
    } else if (width > 429 && width < 1023) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  /**
   * @function resolveHeadingSize
   * @returns {string}
   */
  static resolveHeadingSize(): string {
    const screensize = this.resolveScreenSize();
    switch (screensize) {
      case 'mobile':
        return 'normal';
      case 'tablet':
        return 'small';
      case 'desktop':
        return 'large';
      default:
        return 'large';
    }
  }

  /**
   * @function titleApi
   * @param {string} title
   */
  static titleApi(title: string): void {
    document.title = title;
  }

  /**
   * @function isEmpty
   * @description Checks if string is empty
   * @param {string} value
   * @return {boolean}
   **/
  static isEmpty = (value: string): boolean => {
    // eslint-disable-line
    return value === null || typeof value === 'undefined' || value === '';
  };

  /**
   * @function isEmptyObject
   * @static
   * @description Checks if object is empty
   * @param {T} obj
   * @returns {boolean}
   **/
  static isEmptyObject<T>(obj: T): boolean {
    return (
      obj === null ||
      typeof obj === 'undefined' ||
      typeof obj !== 'object' ||
      Object.keys(obj).length === 0
    );
  }

  /**
   * @function interpolateplaceholder
   * @param {string} textWithPlaceholder
   * @param {Array<string>} contnet
   * @returns {string}
   */
  static interpolateplaceholder = (
    textWithPlaceholder: string,
    content: Array<string>,
  ): string => {
    if (this.isEmpty(textWithPlaceholder) && content.length > 0) {
      content.map((value, index) => {
        textWithPlaceholder = textWithPlaceholder.replace(
          '{' + index + '}',
          value,
        );
        return textWithPlaceholder;
      });
    }
    return textWithPlaceholder;
  };

  /**
   * @function resolveHeading
   * @param {string} heading
   * @returns {string}
   */
  static resolveHeading = (heading: string): string => {
    return heading.replace(/([A-Z])/g, ' $1').trim();
  };

  /**
   * @function resolveSideBarSize
   * @returns {string}
   */
  static resolveSideBarSize = (): string => {
    const screensize = this.resolveScreenSize();
    switch (screensize) {
      case 'desktop':
        return '250px';
      case 'mobile':
        return '135px';
      case 'tablet':
        return '200px';
      default:
        return '250px';
    }
  };

  /**
   * @function resolveImageSize
   * @returns {string}
   */
  static resolveImageSize = (): string => {
    const screensize = this.resolveScreenSize();
    switch (screensize) {
      case 'desktop':
        return '50px';
      case 'mobile':
        return '40px';
      case 'tablet':
        return '30px';
      default:
        return '40px';
    }
  };

  /**
   * @function resolveLegalSize
   * @returns {string}
   */
  static resolveLegalSize = (): string => {
    const screensize = this.resolveScreenSize();
    switch (screensize) {
      case 'desktop':
        return 'lg';
      case 'mobile':
        return 'sm';
      case 'tablet':
        return 'lg';
      default:
        return 'lg';
    }
  };
}
