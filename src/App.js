// src/App.js
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { authenticateUser } from './services/authService';
import { AuthProvider } from './context/AuthContext';
function App() {
  const userData = sessionStorage.getItem('user');
  const user = JSON.parse(userData);
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    window.location="/login";
  };

  const handleLogin = (username, password) => {
    const authenticatedUser = authenticateUser(username, password);

    if (authenticatedUser) {
    sessionStorage.setItem('user', JSON.stringify({username:username,role: authenticatedUser.role}));
    setTimeout(()=>{
      window.location="/";
    },2000)
    }
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {user?.role==="admin"?<li>
            <Link to="/">Dashboard</Link>
          </li>:""}
        </ul>
      </nav>

      <hr />
      <AuthProvider>

      <Routes>
      <Route exact path="/login" element={<LoginForm user={user} onLogin={handleLogin}/>} />
      <Route path='/' element={<Dashboard onLogout={handleLogout}/>}/>
  </Routes>
      </AuthProvider>
    </div>

  );
}

export default App;
