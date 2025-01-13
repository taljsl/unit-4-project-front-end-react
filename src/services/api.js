import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
  }
});

export const registerUser = (data) => api.post('/auth/register/', data);
export const loginUser = (data) => api.post('/auth/login/', data)
    .then(response => {
        localStorage.setItem('authToken', response.data.token);
        return response
    })
export const fetchPosts = () => api.get('/blogposts/');
export const fetchPostById = (id) => api.get(`/blogposts/${id}/`);

// // im assuming this is correct??
// export const fetchProfile = (id) => api.get(`/profiles/${id}/`)

export default api;