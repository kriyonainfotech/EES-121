import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registr() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const navigete = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newdata = { name, email, password,confirmPassword, role, contact, address };

    try {
      const record = await axios.post(`https://ess-backend.vercel.app/register`, {
          name: name,
          email: email,
          password: password,
          cpassword: cpassword,
          role: role,
          contact: contact,
          address: address
      }, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const data = await record.data;
      console.log(data);
      alert('User Added Successfully');
      navigete('/')

  } catch (error) {
      console.log(error);
      return false;
  }

}


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contact</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font -bold py-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Allready have an account? <Link to={'/'} className="text-blue-600 hover:underline">login </Link>
        </p>
      </form>
    </div>
  );
}

export default Registr