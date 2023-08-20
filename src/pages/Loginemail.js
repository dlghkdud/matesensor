import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import signlogo from '../img/signlogo.png'
import signboundary from '../img/signboundary.png'

const Loginemail = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});


    onAuthStateChanged(auth, (currentUser) => {
        console.log(auth);
        setUser(currentUser);
    });

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            document.location.href = '/'
            console.log(user);
            console.log(auth);
        } catch (error) {
            alert('Please check your email or password again')
        }
    };

    return (
        <div className='Loginemail'>
            <Link to='/'><img className='signlogo' src={signlogo} /></Link>

            <span className='loginemailTt'>
                <span className='logintitle'>Log in to&nbsp;</span><span className='loginmate'>mate sensor</span>
            </span>

            <img className='loginemailboundary' src={signboundary} />
            
            <span className='loginemailtitle'>Email</span>
            <input className='inputemaillogin' type='email' placeholder='email@email.com' 
            onChange={(e) => {
                setLoginEmail(e.target.value);
            }}
            />

            <span className='loginpasswordtitle'>Password</span>
            <input className='inputpasswordlogin' type='password' placeholder='Please enter a password of at least 6 digits.'
            onChange={(e) => {
                setLoginPassword(e.target.value);
            }}
            />
            
            <button className='loginbutton'onClick={login}>Login</button>
            
            <Link to='/signup'><button className='gotosignupbutton'>Go to Sign up</button></Link>
        </div>
    )
}

export default Loginemail;