import SInfo from "react-native-sensitive-info";
import jwtDecode from 'jwt-decode';
import auth0 from '../modules/AuthModule';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIdToken, setLoggedIn,setUserDetails,loginSuccess } from '../slices/AuthSlice';
 
export const localLogin = createAsyncThunk(
    'auth/local_login',
    async (arg, { rejectWithValue, dispatch }) => {
        try {
            const token = await SInfo.getItem('idToken', {});
            if (token) {
                const userDetails = jwtDecode(token);
                if (userDetails.exp < Date.now() / 1000) {
                    dispatch(setIdToken(null));
                    dispatch(setLoggedIn(false));
                    
                } else {
                    dispatch(setIdToken(token));
                    dispatch(setLoggedIn(true));
                    dispatch(setUserDetails(userDetails));
                }
            } else {
                dispatch(setLoggedIn(false));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const credentials = await auth0.webAuth.authorize({
                scope: 'openid email profile',
            });
            await SInfo.setItem('idToken', credentials.idToken, {});
            const userDetails = jwtDecode(credentials.idToken);
            dispatch(loginSuccess({idToken:credentials.idToken,loggedIn:true,loading:false,userDetails}));
        } catch (err) {
            rejectWithValue('Error logging in');
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async ( _ , { rejectWithValue,dispatch }) => {
        try {
            auth0.webAuth.clearSession;
            await SInfo.deleteItem('idToken', {});
            dispatch(setLoggedIn(false));

        } catch (err) {
            rejectWithValue('Error logging in');
        }
    }
);
