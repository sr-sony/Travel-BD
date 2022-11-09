import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <p>loading....wait...</p>
    }
    if(!user){
        return <Navigate to ='/login' state={{ from: location }} replace = {true} ></Navigate>
    }
    return children
};

export default PrivateRoute;