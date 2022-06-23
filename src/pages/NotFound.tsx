import { Heading } from 'wafflecss';
import './Home.css';

const NotFound = () => {
    return (
        <div>
            <div className='wrapper'>
                <Heading 
                    data={{
                        headingText: "Looks like you hit a road block."
                    }}
                    options={{
                        size: 'extralarge'
                    }}
                />
                
            </div>
            <div className='wrapper'>
                <Heading 
                    data={{
                        headingText: "Sorry for not adding any fancy animations here."
                    }}
                    options={{
                        size: 'large'
                    }}
                />
            </div>
        </div>
    )
}

export default NotFound;