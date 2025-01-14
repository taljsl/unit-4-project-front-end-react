import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// This should contain the content of a modal that will open when users click a "Create New Post button"

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handlePostChange = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Post Published:', { post.title, post.body});
    // setBody('');
    // setTitle('');
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
          <label htmlFor="TitleInput">Title</label>
          <input
            type="text"
            name="TitleInput"
            id="title"
            value={post.title}
            onChange={handlePostChange}
          />
        </div>
        {/* <input type="button" name='Insert Media' value="Insert Media" onClick= /> */}

        {/* Body Input */}
        <div>
          <label htmlFor="BodyInput">Body</label>
          <textarea
            name="body"
            id="body"
            rows="5"
            value={post.body}
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
