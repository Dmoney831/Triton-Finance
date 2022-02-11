import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='Welcome'>Welcome to TRiTON</h1>
            <div className='home-about-profile'>
                <h3 className='home'><a href='/'>Home</a></h3>
                <h3 className='about'>About</h3>
                <h3 className='profile'>Profile</h3>
            </div>
        </div>
        
    )
}

export default Navbar