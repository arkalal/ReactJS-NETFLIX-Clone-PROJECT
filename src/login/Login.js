import React, { useState } from 'react';
import Signup from '../signup/Signup';
import './Login.css'

const Login = () => {

    const [Signin, setSignin] = useState(false);

    const goSignIn = (e) => {
        e.preventDefault()
        setSignin(true)
    }

    return <div className='login'>
        <div className="loginHeader">
            <img src="https://www.teahub.io/photos/full/21-212834_netflix-logo-png-image-in-high-definition-netflix.png" alt="" />

            <button className="loginButton">Sign In</button>
        </div>

        <div className="loginBody">
            {
                Signin ?
                    (<Signup></Signup>)
                    :
                    (<>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <form action="" className="loginForm">
                            <input type="email" placeholder='Email Address' />
                            <button onClick={goSignIn}>Get Started</button>
                        </form>
                    </>)
            }
        </div >

        <div className="loginGradient"></div>
    </div>;
};

export default Login;
