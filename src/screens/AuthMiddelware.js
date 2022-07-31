import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as RootNavigation from '../RootNavigation';

const AuthMiddleware = ({children}) => {

    const {loggedIn} = useSelector((state)=>state.auth);

    useEffect(() => {
        console.log(loggedIn);
        if(loggedIn == null){
            RootNavigation.navigate('Loading', {});
        }else if(loggedIn) {
            RootNavigation.navigate('Home', {});
        } else {
            RootNavigation.navigate('Login', {});
        }
    }, [loggedIn]);

    return <>{children}</>;
}


export default AuthMiddleware;