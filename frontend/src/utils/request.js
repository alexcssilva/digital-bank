import { api } from "../services/api";

export const postRequest = async (endpoint, body = {}) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const updateRequest = async (endpoint, body = {}) => {
  const { data } = await api.put(endpoint, body);
  return data;
};
