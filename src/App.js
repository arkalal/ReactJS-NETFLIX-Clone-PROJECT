import React from 'react';
import { useSelector } from 'react-redux';
import Home from './home/Home';
import Login from './login/Login';

const App = () => {

    const user = useSelector((state) => state.user.user)

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
