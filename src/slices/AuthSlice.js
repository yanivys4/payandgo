import { createSlice } from '@reduxjs/toolkit'
export { localLogin, login, logout } from '../actions/AuthActions';

const initialState = {
  loading: false,
  idToken: null,
  loggedIn: null,
  userDetails:null
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state,{payload}){
      const {idToken,loading,loggedIn,userDetails} = payload;
      state.idToken = idToken;
      state.loading = loading;
      state.loggedIn = loggedIn;
      state.userDetails = userDetails;
    },
    setIdToken(state, { payload }) {
      state.idToken = payload;
      state.loading = false;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
    setLoggedIn(state,{payload}){
      state.loggedIn = payload;
    },
    setUserDetails(state,{payload}){
      state.userDetails = payload;
    }
  },
  extraReducers: builder => {
  }
})

// Action creators are generated for each case reducer function
export const { setIdToken, setLoading, setLoggedIn,loginSuccess,setUserDetails } = AuthSlice.actions;
export default AuthSlice.reducer;