import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import signlogo from '../img/signlogo.png';
import signboundary from '../img/signboundary.png';

const Signupemail = () =>{
    const navigate = useNavigate();
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
            alert('Your membership registration has been completed!')
            navigate('/login');
        } catch (error) {
            switch (error.code) {
                case 'auth/weak-password':
                    alert('Password must be at least 6 digits long');
                    break;
                case 'auth/invalid-email':
                    alert('Invalid email address');
                    break;
                case 'auth/email-already-in-use':
                    alert('This account is already subscribed');
                    break;
            }
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
        </div>
    )
}

export default Signupemail;