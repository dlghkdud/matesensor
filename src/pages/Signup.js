import { Link } from 'react-router-dom';
import signlogo from '../img/signlogo.png';
import signboundary from '../img/signboundary.png';
import signgoogle from '../img/signgoogle.png';
import signemail from  '../img/signemail.png';
import gotologin from '../img/gotologin.png';

const Signup = () => {
    return (
        <div className='Signup'>
            <Link to='/'><img className='signlogo' src={signlogo} /></Link>

            <span className='signup'>
                <span className='signuptitle'>Sign up to&nbsp;</span><span className='signupmate'>mate sensor</span>
            </span>

            <img className='signupboundary' src={signboundary} />
            
            <span className='signupcon'>
                Please select a registration method.
            </span>

            <span className='signgoogle'>
                <img src={signgoogle} />
            </span>

            <Link to='/signupemail' className='signemail'>
                <img src={signemail} />
            </Link>

            <Link to='/login' className='gotologin'>
                <img src={gotologin} />
            </Link>
        </div>
    )   
}

export default Signup;