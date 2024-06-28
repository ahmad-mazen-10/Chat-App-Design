import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <span className="logo">Chat Mazen</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="User profile picture" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </nav>
  );
}

export default Navbar