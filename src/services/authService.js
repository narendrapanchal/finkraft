import data from '../data/userCredentials.json';

export const authenticateUser = (username, password) => {
  // Authentication logic using the userCredentials data.
  const user = data.find((user) => user.username === username && user.password === password);
  return user;
};
