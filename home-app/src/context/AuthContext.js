import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const resetPassword = (email) => auth.sendPasswordResetEmail(email);

  const updateEmail = (email) => currentUser.updateEmail(email);

  const updatePassword = (password) => currentUser.updatePassword(password);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};