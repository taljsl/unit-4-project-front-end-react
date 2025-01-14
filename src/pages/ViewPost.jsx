import React from 'react'
// This page will contain the title of the blog Post and the body
// If the post was made by the user there should be an edit button that allows the user to change the title & content of their post.
// currently a route needs to be created for this potential ideas /view/dynamically inserted post title
const ViewPost = () => {

  const goToEditPost = () => {
    navigate("/CreatePost");
  };
  return (
    <div>
            <button onClick={goToEditPost}>Edit Post</button>
    </div>
  )
}

export default ViewPost
 