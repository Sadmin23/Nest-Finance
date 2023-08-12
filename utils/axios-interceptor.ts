import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.config.url === '/api/getCSRFToken') {
      axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.data?.status === 'error_auth') {
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export type { AxiosError, AxiosResponse };
export default axios;
