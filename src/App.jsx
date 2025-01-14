import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlogPage from "./pages/BlogPage";
import Header from "./components/Header";
import CreatePost from "./pages/CreatePost";
import ProfilePage from "./pages/ProfilePage";
import PostDetails from "./components/PostDetails";
// AuthContext code suggestion provided by chatgpt along with createContext
export const AuthContext = createContext();

const App = () => {

const [auth, setAuth] = useState({ isLoggedIn: false, user: null });



  return (
    // By Wrapping the component tree in the .provider we make it so that the auth fucntion is avilable  to each component inside

    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Navbar />
        <Routes>
          {auth.isLoggedIn ? (
            <>
              <Route path="/" element={<BlogPage />} />
              <Route path="/posts/:id" element={<PostDetails />} />

              <Route path="/profiles/:userId" element={<ProfilePage />} />

                <Route path="/CreatePost" element={<CreatePost />} />

            </>
          ) : (
            <>
              <Route path="/login/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* the below line makes it so any routes that don't match a component route will route to login page */}
              <Route path="*" element={<LoginPage />} />
            </>
          )}
        </Routes>
      </Router>
    </AuthContext.Provider>

  );
};

export default App;
