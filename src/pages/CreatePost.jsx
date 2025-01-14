import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { handleCreatePost } from "../services/api";
// This should contain the content of a modal that will open when users click a "Create New Post button"
import { AuthContext } from "../App";
import { useContext } from "react";
// console.log(AuthContext);
const CreatePost = () => {
  const { auth } = useContext(AuthContext)
  // console.log(auth);
  const [post, setPost] = useState({
    title: "",
    body_text: "",
    author: null,
  });
  // const [title, setTitle] = useState("");
  // const [body_text, setBody_text] = useState("");
  const navigate = useNavigate();

  const handlePostChange = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    post.author = auth.user.user.id;
try{
  const res = await handleCreatePost(post);
  console.log(res);
}catch(error){
  console.error('Post failed', error.response?.data || error.message);}
    
    
    navigate("/");
  };

  // const handleSaveDraft = () => {
  //   console.log('Draft saved', {title, body});
  // }

  // const handleInsertMedia = () => {

  // }

  // navigate('/BlogPage');

  return (
    <div className="modal-container">
      <div>
        <h1>New Post</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={post.title}
            onChange={handlePostChange}
          />
        </div>
        {/* <input type="button" name='Insert Media' value="Insert Media" onClick= /> */}

        {/* Body Input */}
        <div>
          <label htmlFor="body_text">Body</label>
          <textarea
            name="body_text"
            id="body_text"
            rows="5"
            value={post.body_text}
            onChange={handlePostChange}
          ></textarea>
        </div>

        {/* Buttons */}
        {/* <input type="button" value="Save as Draft" onClick={handleSubmit} /> */}
        <div>
          <button type="submit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
