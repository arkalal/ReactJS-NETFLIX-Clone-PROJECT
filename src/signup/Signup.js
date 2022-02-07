import React, { useRef } from 'react';
import './Signup.css'
import { auth } from '../firebase/firebase'
import { useDispatch } from 'react-redux';
import { login } from '../reduxState/userSlice'

const Signup = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const dispatch = useDispatch()

    const signMeUp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((userAuth) => {
            dispatch(login({
                uid: userAuth.user.uid,
                email: userAuth.user.email
            }))
        }).catch((error) => {
            alert(error)
        })
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((userAuth) => {
            dispatch(login({
                uid: userAuth.user.uid,
                email: userAuth.user.email
            }))
        }).catch((error) => {
            alert(error)
        })
    }

    return <div className='signup'>
        <form action="">
            <h1>Sign In</h1>
            <input type="email" ref={emailRef} name="" id="" placeholder='Email Address' />
            <input type="password" ref={passwordRef} name="" id="" placeholder='Password' />
            <button onClick={signMeUp}>Sign In</button>

            <h4>New to Netflix? <span onClick={register}>Sign Up Now.</span></h4>
        </form>
    </div>;
};

export default Signup;
