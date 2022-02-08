import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import './Nav.css'

const Nav = () => {

    const [Toggle, setToggle] = useState(false);

    const handleToggle = () => {
        if (window.scrollY > 100) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleToggle)

        return () => window.removeEventListener('scroll', handleToggle)
    }, [])

    const logMeOut = (e) => {
        e.preventDefault()
        auth.signOut()
    }

    return <div className={Toggle ? 'nav navBlack' : 'nav'}>
        <div className="navContent">
            <img className='navLogo' src="https://www.teahub.io/photos/full/21-212834_netflix-logo-png-image-in-high-definition-netflix.png" alt="" />

            <img className='navUser' onClick={logMeOut} src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png" alt="" />
        </div>
    </div>;
};

export default Nav;
