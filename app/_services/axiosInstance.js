import axios from "axios";
import { AUTH_TOKEN } from "./../_constants";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

const LogOutHandler = async () => {
  localStorage.removeItem(AUTH_TOKEN);
  document.cookie = `${AUTH_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  await signOut({ callbackUrl: '/login', redirect: false });
  toast.error('Invalid Token')
};


export const apiAUTH = axios.create({
    baseURL:'/',
    timeout:10000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
});

export const api = axios.create({
    baseURL: '/',
    timeout:10000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
})

export const apiFormAUTH = axios.create({
  baseURL:'/',
  timeout:10000,
  headers: {
      "Content-Type": "multipart/form-data; charset=utf-8",
      Accept: "multipart/form-data",
    },
});

apiAUTH.interceptors.request.use((config)=>{
    const token =localStorage.getItem(AUTH_TOKEN);
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  apiAUTH.interceptors.response.use((response)=>{
    return response
  }, function (error) {
    if(error?.status === 401) {
      LogOutHandler()
    } else return error
    console.log('error', error)
  });