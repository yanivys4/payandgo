import SInfo from "react-native-sensitive-info";
import jwtDecode from 'jwt-decode';
import * as RootNavigation from '../RootNavigation.js';
import auth0 from '../modules/AuthModule';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIdToken } from '../slices/AuthSlice';
 
export const localLogin = createAsyncThunk(
    'auth/local_login',
    async (arg, { rejectWithValue, dispatch }) => {
        try {
            const token = await SInfo.getItem('idToken', {});
            if (token) {
                const { exp } = jwtDecode(token);
                if (exp < Date.now() / 1000) {
                    dispatch(setIdToken(null));
                    RootNavigation.navigate('Login');
                } else {
                    dispatch(setIdToken(token));
                    RootNavigation.navigate('Home');
                }
            } else {
                RootNavigation.navigate('Login');
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
            dispatch(setIdToken(credentials.idToken));
            RootNavigation.navigate("Home", {});
            return credentials.idToken;

        } catch (err) {
            rejectWithValue('Error logging in');
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (arg, { rejectWithValue }) => {
        try {
            auth0.webAuth.clearSession;
            await SInfo.deleteItem('idToken', {});

        } catch (err) {
            rejectWithValue('Error logging in');
        }
    }
);
