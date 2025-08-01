import axios from 'axios'

const API_URL = '/api/tasks'
//const API_URL = process.env.NODE_ENV === 'production' 
 // ? 'https://todo-app-bckend-aqzv.onrender.com/api/tasks' 
 // : 'http://localhost:5000/api/tasks';

const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, taskData, config)
  return response.data
}

const updateTask = async (taskId, taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(`${API_URL}/${taskId}`, taskData, config)
  return response.data
}

const deleteTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL}/${taskId}`, config)
  return response.data
}

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
}