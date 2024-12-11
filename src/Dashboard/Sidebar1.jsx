import React from "react";
import { Link } from "react-router-dom";

const Sidebar1 = () => {
  return (
    <aside className="fixed top-0 left-0 w-1/6 h-screen bg-[#6b6252] shadow-lg flex flex-col items-center py-6">
      {/* Logo or Name */}
      <h2 className="text-2xl font-bold text-[#e5e5e5] mb-10">iDan</h2>

      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-10">
        {/* Dashboard Icon */}
        <Link
          to="/Dashboard"
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-all"
        >
          <i className="fas fa-home text-2xl text-white mb-2"></i>
          <span className="text-sm font-medium text-white">Dashboard</span>
        </Link>

        {/* Add User Icon */}
        <Link
          to="/Add"
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-all"
        >
          <i className="fas fa-user-plus text-2xl text-white mb-2"></i>
          <span className="text-sm font-medium text-white">Add User</span>
        </Link>

        {/* Log Out Icon */}
        <Link
          to="/"
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-all"
          aria-label="Log Out"
        >
          <i className="fas fa-power-off text-2xl mb-2 text-white"></i>
          <span className="text-sm font-medium text-white">Log Out</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar1;
