import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import signlogo from '../img/signlogo.png';
import signboundary from '../img/signboundary.png';

const Signupemail = () =>{
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return(
        <div className='Signupemail'>
            <Link to='/'><img className='signlogo' src={signlogo} /></Link>

            <span className='signupemail'>
                <span className='signuptitle'>Sign up to&nbsp;</span><span className='signupmate'>mate sensor</span>
            </span>

            <img className='signemailboundary' src={signboundary} />
            
            <span className='signupemailtitle'>Email</span>
            <input className='inputemail' type='email' placeholder='email@email.com' 
            onChange={(e) => {
                setRegisterEmail(e.target.value);
            }}
            />
            
            <span className='signuppasswordtitle'>Password</span>
            <input className='inputpassword' type='password' placeholder='Please enter a password of at least 6 digits.'
            onChange={(e) => {
                setRegisterPassword(e.target.value);
            }}
            />

            <span className='residencetitle'>Residence</span>
            <input className='inputresidence' placeholder='33-4, Wonhyo-ro 97-gil, Yongsan-gu, Seoul, Republic of Korea'></input>

            <span className='mbtititle'>MBTI</span>
            <input className='inputmbti' maxLength={4} placeholder='I S T J'></input>

            <span className='activitytitle'>Main activity time</span>
            <input className='inputactivity' maxLength={11} placeholder='      8:00 ~ 24:00'></input>
            
            <span className='pettitle'>Pets</span>
            <button className='o'>O</button>
            <button className='x'>X</button>

            <span className='introductiontitle'>Introduction</span>
            <textarea className='inputintroduction'></textarea>

            <button className='signupbutton'onClick={register}>Signup</button>
            <Link to='/login'><button className='gotologinbutton'>Go to Log in</button></Link>
        </div>
    )
}

export default Signupemail;