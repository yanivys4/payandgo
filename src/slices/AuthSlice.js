import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SInfo from "react-native-sensitive-info";
import jwtDecode from 'jwt-decode';
import * as RootNavigation from '../RootNavigation.js';
import auth0 from '../modules/AuthModule';

//import {AUTH0_DOMAIN,AUTH0_CLIENT_ID} from '@env';

//const a = AUTH0_DOMAIN;
//console.log(a);

const initialState = {
  loading: false,
  idToken: null,
}

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
  });

export const logout = createAsyncThunk(
  'auth/logout',
  async (arg, { rejectWithValue }) => {
    try {
      auth0.webAuth.clearSession;
      await SInfo.deleteItem('idToken', {});

    } catch (err) {
      rejectWithValue('Error logging in');
    }
  });

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIdToken(state, { payload }) {
      state.idToken = payload;
      state.loading = false;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.debug_msg = 'pending!';
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
      })
      .addCase(login.rejected, (state, action) => {

      })
      .addCase(logout.fulfilled, (state, action) => {
        state.token = null;
      })
  }
})

// Action creators are generated for each case reducer function
export const { setIdToken, setLoading } = AuthSlice.actions
export default AuthSlice.reducer;