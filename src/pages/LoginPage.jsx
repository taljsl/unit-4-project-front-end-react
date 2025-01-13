import { useContext, useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   console.log(username, password);
      const res = await loginUser({ username, password });
      if (res && res.data)
        console.log("login successful:", res.data);
   
        setAuth({isLoggedIn: true, user: res.data});
        console.log(user);
                
        navigate("/");
    
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="Text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
