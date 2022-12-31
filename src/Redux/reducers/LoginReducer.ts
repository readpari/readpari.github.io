import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultLogPass = { login: '', pass: '' };
interface logPassType {
  login: string;
  pass: string;
}

interface loginReducerStateType {
  user: logPassType;
  isAuth: boolean;
  logPass: logPassType[];
}

const initialState: loginReducerStateType = {
  user: defaultLogPass,
  isAuth: false,
  logPass: [{ login: 'f', pass: 'j' }],
};

const LoginReducer = createSlice({
  name: 'LoginReducer',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<logPassType>) {
      const { login, pass } = action.payload;
      console.log(111);

      state.isAuth = state.logPass.some((item) => item.login == login && item.pass == pass);
      state.user = state.isAuth ? { login, pass } : defaultLogPass;
    },
    signOut(state) {
      state.isAuth = false;
      state.user = defaultLogPass;
    },
  },
});

export default LoginReducer.reducer;
export const { signIn, signOut } = LoginReducer.actions;
