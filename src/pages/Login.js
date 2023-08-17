import { Link } from 'react-router-dom';
import signlogo from '../img/signlogo.png'
import signboundary from '../img/signboundary.png'
import logingoogle from '../img/logingoogle.png'
import loginemail from  '../img/loginemail.png'
import gotosignup from '../img/gotosignup.png'

const Login = () => {
    return (
        <div className='Login'>
            <Link to='/'><img className='signlogo' src={signlogo} /></Link>

            <span className='login'>
                <span className='logintitle'>Log in to&nbsp;</span><span className='loginmate'>mate sensor</span>
            </span>

            <img className='loginboundary' src={signboundary} />
            
            <span className='logincon'>
                Please select a login method.
            </span>

            <span className='logingoogle'>
                <img src={logingoogle} />
            </span>

            <Link to='/loginemail' className='loginemail'>
                <img src={loginemail} />
            </Link>

            <Link to='/signup' className='gotosign'>
                <img src={gotosignup} />
            </Link>
        </div>
    )
}

export default Login;