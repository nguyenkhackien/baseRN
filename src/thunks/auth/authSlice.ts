import {createSlice} from '@reduxjs/toolkit';
import {StorageEnum} from '~/utils/enum';
import {handleLogin} from './authThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '~/utils/interface/auth';

const initialState: AuthState = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout(state) {
      state.accessToken = '';
      AsyncStorage.removeItem(StorageEnum.ACCESS_TOKEN);
    },
    handleLogin(state) {
      state.accessToken = '123';
    },
  },
  extraReducers(builder) {
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      AsyncStorage.setItem(
        StorageEnum.ACCESS_TOKEN,
        action.payload.token.access,
      );
      AsyncStorage.setItem(
        StorageEnum.REFRESH_TOKEN,
        action.payload.token.refresh,
      );
      state.accessToken = '123';
    });
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
