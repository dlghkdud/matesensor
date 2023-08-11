import { Link, Outlet } from 'react-router-dom';
import logo from './img/logo.png';

const Layout = () => {
    return (
        <div className="header">
            <div className='nav'>
                <Link to='/' span className='logo'><img src = {logo}/></Link>
                <Link to='/' className='left'>Home</Link>
                <Link to='/about' className='left'>About</Link>
                <Link to="/mating" className='right'>Mating</Link>
                <Link to="/matingchat" className='right'>Mating chat</Link>
                <span className='right'>New mating</span>
                <Link to='/login' className='right2'>Log in&nbsp;&nbsp;·</Link>
                <Link to='/signup' className='right2'>&nbsp;&nbsp;Sign up</Link>
            </div>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;