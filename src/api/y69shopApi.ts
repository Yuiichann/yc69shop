import { AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';

const y69ShopApi = {
  getAllProducts: (params: any) => {
    const url = 'api/products';
    return axiosClient.get(url, { params } as AxiosRequestConfig);
  },

  uploadImage: (formData: FormData) => {
    const url = 'api/upload';
    return axiosClient.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default y69ShopApi;
