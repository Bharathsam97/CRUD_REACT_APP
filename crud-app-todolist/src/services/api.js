import axios from 'axios';

const BASE_URL = ' http://localhost:3001'; // Replace with your API URL

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/usersData/users`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const addUser = async (name, description) => {
  try {
    const response = await axios.post(`${BASE_URL}/usersData/users`, { name, description });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response=await axios.put(`${BASE_URL}/usersData/users/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/usersData/users/${id}`);
  } catch (error) {
    console.error('Error:', error);
  }
};
