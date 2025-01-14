import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/api";
import { fetchProfile } from "../services/api";
import { AuthContext } from "../App";
import { deletePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import EditPost from "../pages/EditPost";
const PostDetails = () => {
  const { id } = useParams(); // This retrieves the post id from the URL
  const [post, setPost] = useState(null);
  const [profile, setProfile] = useState(null);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const response = await fetchPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    getPostDetails();
  }, [id]);

  useEffect(() => {
    const getProfileDetails = async () => {
      try {
        const response = await fetchProfile(post.author);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    };

    post && getProfileDetails();
  }, [post]);

  console.log(post);

 
  if (!post) {
    return <p>Loading post details...</p>;
  }
  const isOwner = auth.user.user.id === post.author;
  const handleDelete = async (id) => {
    console.log(id);
    try {
     const res = await deletePost(id);
        console.log("Post deleted", res);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <div>
      <h2>{post.title}</h2>
      {profile && <p>Author:{profile.profile.user.username}</p>}
      <div>
        <p>{post.body_text}</p>
      </div>
      {isOwner && <button type="Button"> Edit</button>}
      {isOwner && <button onClick={() => handleDelete(id)}> Delete</button>}
    </div>
  );
};

export default PostDetails;
