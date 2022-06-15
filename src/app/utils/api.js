import qs from "qs";
import axios from "axios";

import config from "app/config";

export const fetch = ({ endpoint, data }) => {
  return axios({
    url: `${config.url}${endpoint}`,
    params: data,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "brackets" });
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });
};

export const get = ({ endpoint, data }) => {
  return axios({
    url: `${config.url}${endpoint}`,
    params: data,
    data: {},
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "brackets" });
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  }).then((response) => response);
};

export const create = ({ endpoint, data, options = {}, headers = {} }) => {
  return axios({
    url: `${config.url}${endpoint}`,
    method: "POST",
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
    ...options,
  }).then((response) => response);
};

export const update = ({ endpoint, data }) => {
  return axios({
    url: `${config.url}${endpoint}`,
    method: "PATCH",
    data: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  }).then((response) => response);
};

export const destroy = ({ endpoint, data }) => {
  return axios({
    url: `${config.url}${endpoint}`,
    method: "DELETE",
    data: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  }).then((response) => response);
};
