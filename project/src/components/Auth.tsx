// AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: { email: string; role: 'farmer' | 'buyer' } | null;
  login: (email: string, password: string, role: 'farmer' | 'buyer') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null); // Initialize with null

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string; role: 'farmer' | 'buyer' } | null>(null);

  const login = (email: string, password: string, role: 'farmer' | 'buyer') => {
    // Simulate login
    setUser({ email, role });
    localStorage.setItem('user', JSON.stringify({ email, role }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}