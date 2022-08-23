
export class Utilities {

    /**
     * @function resolveScreenSize
     * @returns {string}
     */
    static resolveScreenSize ():string {
        const width:number = window && window.innerWidth;
        if(width < 428) {
            return 'mobile';
        } else if(width > 429 && width < 1023) {
            return 'tablet';
        } else {
            return 'desktop';
        }
    }

    /**
     * @function resolveHeadingSize
     * @param {string} screen
     * @returns {string}
     */
    static resolveHeadingSize(screen: string): string {
        switch(screen) {
            case 'mobile':
                return 'normal'
            case 'tablet':
                return 'small'
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
        return value === null || typeof value === 'undefined' || value === ''
    }

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
        )
    }

    /**
     * @function interpolateplaceholder
     * @param {string} textWithPlaceholder 
     * @param {Array<string>} contnet 
     * @returns {string}
     */
    static interpolateplaceholder = (
            textWithPlaceholder: string,
            content: Array<string>
        ):string => {
        if(this.isEmpty(textWithPlaceholder) && content.length > 0) {
            content.map((value, index) => {
                textWithPlaceholder = textWithPlaceholder.replace('{' + index + '}', value);
                return textWithPlaceholder;
            });
        }
        return textWithPlaceholder;
    }
    
}