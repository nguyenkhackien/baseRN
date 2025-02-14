import {ILoginPayload} from '~/utils/interface/auth';
import axiosClient from './axiosClient';

const authApi = {
  login(data: ILoginPayload) {
    return axiosClient.post('/api/admin/auth/login', data);
  },
};
export default authApi;
