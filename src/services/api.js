import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  headers: {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
  //   withXSRFToken: true,
  //     xsrfCookieName: `csrftoken`,
  //     xsrfHeaderName: `X-CSRFToken`,
});

export const registerUser = (data) => api.post("/auth/register/", data);
export const loginUser = (data) =>
  api.post("/auth/login/", data).then((response) => {
    localStorage.setItem("authToken", response.data.token);
    return response;
  });
export const fetchProfile = (userId) => api.get(`users/profiles/${userId}`);
// export const loginUser = async (credentials) => {
//   const res = await axios.post("/auth/login/", credentials);
//   return res
// }
export const fetchPosts = () => api.get("/blogposts");
export const fetchPostById = (id) => api.get(`/blogposts/${id}`);

export const fetchUserById = (userId) => api.get(`/users/${userId}`);
// export const handleCreatePost = async (data) => {
//   try {
//     const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}blogposts/`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//       },
//     });
//     if(res.ok){
//       console.log('Post created successfully');
//       const results = await res.json();
//       console.log(results);
//     }
//     console.log(res);
//     return res;
//   } catch (error) {
//     console.error("Error creating post:", error);
//   }
// };
export const handleCreatePost = (data) =>api.post("/blogposts/", data);

export const deletePost = (id) => api.delete(`/blogposts/${id}/`);
export default api;
