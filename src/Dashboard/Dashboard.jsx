import React from "react";
import Sidebar1 from "./Sidebar1";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex ">
      {/* Sidebar */}
      <Sidebar1 />

      {/* Main Content */}
      <main className="w-5/6 bg-white p-10 ml-[16%]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#6a6458]">Admin Dashboard</h1>
          {/* Bell Icon */}
          <span className="text-3xl text-[#6a6458] cursor-pointer">
            <i className="fa fa-bell"></i>
          </span>
        </div>

        {/* Top Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md text-center">
            <Link
          to="/Pending"
          className="flex flex-col items-center text-white hover:text-blue-600 transition-all"
        >
          <h3 className="text-2xl font-semibold"> Pending</h3>

        </Link>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md text-center">
            <Link
          to="/Pending"
          className="flex flex-col items-center text-white hover:text-blue-600 transition-all"
        >
            <h3 className="text-2xl font-semibold"> Approved</h3>
            </Link>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-md text-center">
            <Link
          to="/Pending"
          className="flex flex-col items-center text-white hover:text-blue-600 transition-all"
        >
            <h3 className="text-2xl font-semibold"> Reject  </h3>

        </Link>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
