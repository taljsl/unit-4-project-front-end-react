import { useContext, useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   console.log(username, password);
      const res = await loginUser({ username, password });

      console.log("login response:", res.data);
      
      if (!res.data || !res.data.user)
        throw new Error('invalid response structure')
   
        setAuth({
          isLoggedIn: true, 
          user: {
            user: res.data.user,
          },
        });

        console.log("auth state updated:", res.data.user);
       

        navigate("/");
    
    } catch (error) {
      console.error("Login failed", error);
    }
  };


  

  return (
    <div className="login-container">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="Text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-button"><button type="submit">Login</button></div>
      </form>
    </div>
  );
};

export default LoginPage;
