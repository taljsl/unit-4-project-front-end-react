import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

// This should contain the content of a modal that will open when users click a "Create New Post button"

const CraftPost = () => {

  const [post,setPost] = useState({
    title: '',
    body: '',
  })
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const navigate = useNavigate();

 const handlePostChange = (e) => {
    setPost({...post, [e.target.id]: e.target.value})
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Post Published:', { title, body});
    // setBody('');
    // setTitle('');
    navigate('/');
  }
  
    

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
            id="TitleInput" 
            value={title}
            o
            onChange={handlePostChange} />
        </div>
          {/* <input type="button" name='Insert Media' value="Insert Media" onClick= /> */}
        
         {/* Body Input */}
          <div>Body
            <label htmlFor="BodyInput">Body</label>
            <textarea 
            
              name="body" 
              id="BodyInput"
              rows="5"
              value={body}
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
  )
}

export default CraftPost;
