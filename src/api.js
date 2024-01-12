// api.js

import axios from 'axios';

const API_URL = 'http://localhost:3043'; // Replace with your Spring Boot API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createUser = async (users) => {
  try {
    const response = await api.post('/api/users', users);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/api/users/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
