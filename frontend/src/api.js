// src/api.js
import axios from 'axios';

const API_BASE = 'https://reqres.in/api/users';

export const getUsers = (page = 1, search = '') =>
  axios.get(API_BASE, { params: { page, per_page: 5 } });

export const createUser = (user) =>
  axios.post(API_BASE, user);

export const updateUser = (id, user) =>
  axios.put(`${API_BASE}/${id}`, user);

export const deleteUser = (id) =>
  axios.delete(`${API_BASE}/${id}`);
