import {createAsyncThunk} from '@reduxjs/toolkit';
import authApi from '~/apis/auth';
import {LOGIN} from '~/utils/constants/actionType';

import {ILoginPayload, IResponseLogin} from '~/utils/interface/auth';

export const handleLogin = createAsyncThunk<IResponseLogin, ILoginPayload>(
  LOGIN,
  async (data: ILoginPayload, {rejectWithValue}) => {
    try {
      const res = await authApi.login(data);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
