import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserType } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (phone: string, password: string, userType: UserType) => boolean;
  signup: (userData: Omit<User, 'id' | 'createdAt'>) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = 'eventwork_users';
const SESSION_KEY = 'eventwork_session';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing session
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (sessionData) {
      const sessionUser = JSON.parse(sessionData);
      setUser(sessionUser);
    }
  }, []);

  const getUsers = (): User[] => {
    const usersData = localStorage.getItem(USERS_KEY);
    return usersData ? JSON.parse(usersData) : [];
  };

  const saveUsers = (users: User[]) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  const login = (phone: string, password: string, userType: UserType): boolean => {
    const users = getUsers();
    const foundUser = users.find(
      (u) => u.phone === phone && u.password === password && u.userType === userType
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem(SESSION_KEY, JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const signup = (userData: Omit<User, 'id' | 'createdAt'>): boolean => {
    const users = getUsers();
    
    // Check if phone already exists for this user type
    const existingUser = users.find(
      (u) => u.phone === userData.phone && u.userType === userData.userType
    );
    
    if (existingUser) {
      return false;
    }

    const newUser: User = {
      ...userData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);
    setUser(newUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
