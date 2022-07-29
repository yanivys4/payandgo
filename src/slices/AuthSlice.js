import { createSlice } from '@reduxjs/toolkit'
export { localLogin, login, logout } from '../actions/AuthActions';

const initialState = {
  loading: false,
  idToken: null,
}

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
  }
})

// Action creators are generated for each case reducer function
export const { setIdToken, setLoading } = AuthSlice.actions;
export default AuthSlice.reducer;