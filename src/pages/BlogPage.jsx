import { useState, useEffect } from "react";
import { fetchPosts, fetchPostById } from "../services/api";
import PostList from "../components/PostList";
import PostDetails from "../components/PostDetails";
import SearchBar from "../components/SearchBar";


const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  

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

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {selectedPost ? (
        <PostDetails post={selectedPost} />
      ) : (
        <PostList posts={filteredPosts} onPostSelect={handlePostSelect} />
      )}
    </div>
  );
};

export default BlogPage;
