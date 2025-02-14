import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {TIME_OUT} from '~/utils/constants/common';
import {StorageEnum} from '~/utils/enum';
import {getTimezone} from '~/utils/helper/helpers';
import {getData} from '~/utils/helper/storage';

const axiosClient = axios.create({
  baseURL: '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: TIME_OUT,
});

/**
 * Interceptors for handling Bearer token
 */
axiosClient.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    //TODO: storage utils
    const token = await getData(StorageEnum.ACCESS_TOKEN);
    // const idFranchise = await getData(ACCESS_ID_FRANCHISE);
    if (config.headers) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      // config.headers['Bor-Company-Id'] = idFranchise;
      config.headers['Bor-Timezone'] = getTimezone();
    }
    return config;
  },
  function (error: AxiosError | Error) {
    return Promise.reject(error);
  },
);

/**
 * Response interceptor
 */
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: any) {
    console.log(
      '[axiosClient.ts] axiosClient.interceptors.response error: ',
      JSON.stringify(error),
    );

    return Promise.reject(error);
    // if (error.response) {
    //   const keyError: string = httpResponse[error.response.data.code];
    //   handleError({
    //     title: i18n.t('Sign Up Screen Alert Error Title'),
    //     error: i18n.t(keyError),
    //   });
    //   return Promise.reject(error.response);
    // }
    // console.log(`${labelLog} [interceptors.response] error -> ${JSON.stringify(error)}`);
    // return Promise.reject(BASE_RESPONSE_NETWORK_ERROR);
  },
);

export default axiosClient;
