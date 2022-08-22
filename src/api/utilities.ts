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
}