import '../About.css'
import About1 from '../images/about2.png'
import About10 from '../images/About10.png'


function About() {
    return (
        <div className='about1'>
            <div>
                {/* <img className='about10' src={About10} /> */}
            </div>
            <div className='section1'>
                <div className='subject'>
                    <h1 className='first'>Triton Finance</h1>
                    <h2 className='second'>Where Data is Wealth</h2>
                </div>
                <div className='hello'>
                    <p>Welcome to Triton. Triton provides live stock market to individuals and organizations. 
                    This is a second project to practice  React.js, Bootstrap with using APIs in order to strenghten front-end skills. Hope you enjoy my work, and please find my github or LinkedIn below for any questions or improvement I can make. </p> 
                </div>
            </div>
            <div className='section2'>
                <div className='about-img'>
                    <img src={About1} width={950} height={700} />
                </div>
            </div>
        </div>
    )
}

export default About