import React, { useState } from 'react';
import { useAuth } from './Auth';

export function LoginRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'farmer' | 'buyer'>('buyer');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login / Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <div>
          <label>
            <input
              type="radio"
              value="buyer"
              checked={role === 'buyer'}
              onChange={() => setRole('buyer')}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              value="farmer"
              checked={role === 'farmer'}
              onChange={() => setRole('farmer')}
            />
            Farmer
          </label>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}