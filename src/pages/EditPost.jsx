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
            navigate("/blogposts");
            
            const handlePostChange = (e) => {
                setPost({ ...post, [e.target.id]: e.target.value });
              };
        }
        const handlePostDelete = async () => {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this post?"
            );
            if (confirmDelete) {
                try {
                    const response = await fetch(`/blogposts/${id}/`, {
                        method: "DELETE",
                    });
                    if (response.ok) {
                        console.log("Post Deleted");
                        navigate("/blogposts"); // Redirect to the blogposts page
                    } else {
                        console.error("Failed to delete post.");
                    }
                } catch (error) {
                    console.error("Error deleting post:", error);
                }
            }
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
                <button
                onClick={handlePostDelete}
                style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}>
                Delete Post
            </button>

            </form>
        );
}

export default EditPost;