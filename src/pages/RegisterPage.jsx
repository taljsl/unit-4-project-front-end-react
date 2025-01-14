import { useContext, useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ username, password });
      const user = res.data;
      setAuth({isLoggedIn: true, user: res.data})
      console.log(user);
      
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className='Register'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;