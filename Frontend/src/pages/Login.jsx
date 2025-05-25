import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.data);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Login successful and details saved!');
        // Redirect or perform other actions here
      } else {
        alert(result.error || 'Login failed.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-10">
      <fieldset className="bg-gray-100 border border-gray-300 px-10 py-8 rounded-lg shadow-lg">
        <legend className="text-3xl font-semibold text-center mb-6">QPSL Login</legend>

        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="input w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="input w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="flex justify-between text-sm text-gray-700 mt-4">
          <span>
            Do Not Have An Account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </span>
          <Link to="/forgetpassword" className="text-blue-600 hover:underline">
            Forget Password
          </Link>
        </div>
      </fieldset>
    </div>
  );
};

export default Login;
