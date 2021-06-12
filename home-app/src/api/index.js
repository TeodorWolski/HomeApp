import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost/backend/api/',
});

export const endpoints = {
  tasks: 'tasks/read.php',
  createTask: 'tasks/create.php',
  budget: 'budget/read_copy.php',
};
