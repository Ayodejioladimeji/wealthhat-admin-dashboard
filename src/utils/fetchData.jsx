import axios from 'axios';

// const endpoint = process.env.REACT_APP_API;
const endpoint = 'http://localhost:8000/api/';

// THE POST DATA API
export const postDataAPI = async (url, data) => {
  const res = await axios.post(endpoint + url, data);
  return res;
};

// THE POST DATA API WITH TOKEN
export const postDataAPIS = async (url, data, token) => {
  const res = await axios.post(endpoint + url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json;charset=UTF-8',
    },
  });
  return res;
};

export const postImageAPIS = async (url, data, token) => {
  const res = await axios.post(endpoint + url, data, {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const postAPIS = async (url, token) => {
  const res = await axios.post(endpoint + url, token, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json;charset=UTF-8',
    },
  });
  return res;
};

// GET
export const getDataAPI = async (url, token) => {
  const res = await axios.get(endpoint + url, {
    headers: {
      Authorization: token,
      'Content-type': 'application/json;charset=UTF-8',
    },
  });
  return res;
};

export const getData = async (url) => {
  const res = await axios.get(endpoint + url);
  return res;
};

// UPDATE
export const patchDataAPI = async (url, data, token) => {
  const res = await axios.patch(endpoint + url, data, {
    headers: {
      Authorization: token,
      'Content-type': 'application/json;charset=UTF-8',
    },
  });
  return res;
};

// DELETE
export const deleteDataAPIS = async (url, token) => {
  const res = await axios.delete(endpoint + url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json;charset=UTF-8',
    },
  });
  return res;
};
