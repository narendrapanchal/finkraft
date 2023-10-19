// src/services/authService.js
import data from '../data/userCredentials.json';

export const authenticateUser = (username, password) => {
  // Implement authentication logic using the userCredentials data.
  const user = data.find((user) => user.username === username && user.password === password);
  return user;
};
