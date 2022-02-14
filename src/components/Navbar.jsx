import { Link } from 'react-router-dom'
import '../Navbar.css'
import Logo from '../images/logo.png'


function Navbar() {
    // const logo = url('../images/triton-logo1')
    return (
        <div className='navbar'>
            <Link to={'/'}><img className='logo7' src={Logo} height={120} width={120}/></Link>
            {/* <h1 className='welcome'>TRITON</h1> */}
            <div className='home-about-login'>
                <h3  className='home'><a style={{ color: 'rgb(82, 109, 195)', textDecoration: 'none' }} href='/'>Home</a></h3>
                <Link to={'/about'} style={{ textDecoration: 'none' }}><h3 className='about'>About</h3></Link>
                <h3 className='login'>Login</h3>
            </div>
        </div>
        
    )
}

export default Navbar

