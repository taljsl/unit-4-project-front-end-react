import { useState, useEffect } from "react";
import { fetchPosts, fetchPostById } from "../services/api";
import PostList from "../components/PostList";
import PostDetails from "../components/PostDetails";
import SearchBar from "../components/SearchBar";
import CreatePost from "./CreatePost";
import { Navigate, useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetchPosts();
      setPosts(response.data);
      setFilteredPosts(response.data);
    };
    loadPosts();
  }, []);

  const handleSearch = (query) => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handlePostSelect = async (id) => {
    const response = await fetchPostById(id);
    setSelectedPost(response.data);
  };

  const goToCreatePost = () => {
    navigate("/CreatePost");
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <button onClick={goToCreatePost}>Craft a Post</button>
      {selectedPost ? (
        <PostDetails post={selectedPost} />
      ) : (
        <PostList posts={filteredPosts} onPostSelect={handlePostSelect} />
      )}
    </div>
  );
};

export default BlogPage;
