import { Heading } from 'wafflecss';

const NotFound = () => {
    return (
        <div>
            <Heading 
                data={{
                    headingText: "Looks like you hit a road block."
                }}
                options={{
                    size: 'extralarge'
                }}
            />
            <Heading 
                data={{
                    headingText: "Sorry for not adding any fancy animations here."
                }}
                options={{
                    size: 'large'
                }}
            />
        </div>
    )
}

export default NotFound;