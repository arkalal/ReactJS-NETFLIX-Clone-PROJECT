import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { auth } from './firebase/firebase';
import Home from './home/Home';
import Login from './login/Login';
import { login, logout } from './reduxState/userSlice';

const App = () => {

    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return <div>
        {
            user ?
                <Home></Home>
                :
                <Login></Login>
        }
    </div>;
};

export default App;
