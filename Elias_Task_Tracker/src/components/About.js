import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div style={aboutStyling}>
            <h4>Version 1.0.0</h4>
            <Link to="/"> Go Back</Link>
        </div>
    )
}

const aboutStyling ={
    textAlign: 'center',
}

export default About
