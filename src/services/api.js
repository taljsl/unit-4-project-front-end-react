import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const registerUser = (data) => api.post('/auth/registration/', data);
export const loginUser = (data) => api.post('/auth/login/', data);
export const fetchPosts = () => api.get('/blogposts/');
export const fetchPostById = (id) => api.get(`/blogposts/${id}/`);

export default api;