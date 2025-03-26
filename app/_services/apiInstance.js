import { api, apiAUTH, apiFormAUTH } from "./axiosInstance";

// no auth token required
export const getAPI = async (url, body) => {
  const response = await api.get(url, body);
  return response;
};

// auth token required
export const getAPIAuth = async (url) => {
    const response = await apiAUTH.get(url);
    return response;
};

// no auth token required
export const postAPI = async (url, params) => {
  const response = await api.post(url, params);
  return response;
};

// auth token required
export const postAPIAuth = async (url, params) => {
    const response = await apiAUTH.post(url, params);
    return response;
};

// auth token required
export const deleteAPIAuth = async (url, params) => {
  const response = await apiAUTH.delete(url, params);
  return response;
};

// auth token required
export const formDataAuth = async (url, params) => {
    const response = await apiFormAUTH.post(url, params,{
      "Content-Type":"multipart/form-data"
    });
    return response;
};

// auth token required
export const PutFormDataAuth = async (url, params) => {
  const response = await apiFormAUTH.put(url, params,{
    "Content-Type":"multipart/form-data"
  });
  return response;
};

// auth token required
export const PutApiAuth = async (url, params) => {
  const response = await apiAUTH.put(url, params);
  return response;
};

// no auth token required
export const putAPI = async (url, params) => {
  const response = await api.put(url, params);
  return response;
};