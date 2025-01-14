import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [post,setPost] = useState({
         title: "",
          body: ""
        });

        useEffect(() => {
            const fetchPost = async () => {
                const response = await fetch(`/blogposts/${id}/`);
                const data = await response.json();
                setPost(data);
            };
            fetchPost();
        }, [id]);

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Post Updated:", post);
            navigate("/blogposts")
            
            const handlePostChange = (e) => {
                setPost({ ...post, [e.target.id]: e.target.value });
              };
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    value={post.title}
                    onChange={handlePostChange}
                />
                <label>Body</label>
                <textarea
                    value={post.body}
                    onChange={handlePostChange}
                ></textarea>
                <button type="submit">Publish</button>

            </form>
        );
}

export default EditPost;