export class Utilities {
    static resolveScreenSize () {
        const width:number = window && window.innerWidth;
        if(width < 428) {
            return 'mobile';
        } else if(width > 429 && width < 1023) {
            return 'tablet';
        } else {
            return 'desktop';
        }
    }

    static resolveHeadingSize(screen: string) {
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
}