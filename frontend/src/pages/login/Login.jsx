import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const naviget = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform login logic here. You would typically make an API request
    // to your backend to authenticate the user.
    try {
      // Example API request to authenticate user
      const response = await fetch('https://right-seagull-lightly.ngrok-free.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // setIsLogin(true);
        // naviget('/dashboard');

        // Redirect to the dashboard or home page after successful login.
        window.location.href = '/dashboard';
        console.log('Login successful!');
      } else {
        // Handle error responses
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto flex  items-center justify-center min-h-screen py-16">
      <form onSubmit={handleSubmit} className="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mx-10 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <Link to={'/register'} className="text-blue-600 hover:underline">Sign up </Link>
        </p>
      </form>
      
    </div>
  );
}

export default Login;