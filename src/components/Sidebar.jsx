import React from 'react'
import Navbar from './Navbar'
import Search from "./Search";
import Chats from "./Chats";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </aside>
  );
}

export default Sidebar