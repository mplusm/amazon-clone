import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault ();

        auth.signInWithEmailAndPassword(email, password).auth
        (auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
        //firebase login 
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>  {
        if (auth) {
            history.push('/')
        }
    })

    .catch(error => alert(error.message))

    return (
        <div className='login'>
            <Link to ='/'>
            <img 
            className="login__logo"
            src="https://www.gannett-cdn.com/-mm-/8eded6e5fecea21a0098fa1a295b13d637260962/c=322-342-1887-1226&r=x1683&c=3200x1680/local/-/media/2017/09/07/Rochester/Rochester/636403844012827674-Amazon-logo.png"/>


            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                  <h5>E-mail</h5>
                  <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                  <h5>Password</h5>
                  <input type='password' value={password} 
                  onChange={e => setPassword(e.target.value)}
                    />
         
                  <button type='submit' onClick={signIn} className='login__signInButton'> Sign In</button>
                </form>
                
                <p>
                    By Signing you agree to Amazon-clone conditions built by Mallesh Madapathi (developerr.io)
                </p>
                <button onClick={register} className='login__registerButton'> Create An Account</button>
            </div>
        </div>
    )
}

export default Login
