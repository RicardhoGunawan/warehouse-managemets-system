// services/api.js  
import axios from 'axios';  
  
const api = axios.create({  
  baseURL: 'http://localhost:3000', // Replace with your backend URL  
  headers: {  
    'Content-Type': 'application/json',  
  },  
});  
  
// Add a request interceptor to include the token in headers  
api.interceptors.request.use(  
  (config) => {  
    const token = localStorage.getItem('token'); // Retrieve the token  
    if (token) {  
      config.headers['Authorization'] = `Bearer ${token}`; // Set the token in the headers  
    }  
    return config;  
  },  
  (error) => {  
    return Promise.reject(error);  
  }  
);  
  
export default api;  
