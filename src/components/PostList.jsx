import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts to display.</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default PostList;