import React from "react";
import Sidebar from "./Sidebar";

const View = ({items}) => {


  const getUser = localStorage.getItem("user")
  



  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

     

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-6">
        <div className="w-full mx-auto px-6 py-6 h-auto mt-10 max-w-4xl bg-white rounded-xl shadow-md border border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">{getUser.name}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Download File
            </button>
          </div>

          {/* Details Section */}
          <div className="flex items-start gap-6 mb-6">
            {/* Labels */}
            <ul className="font-medium">
              <li>ID: {getUser.ID}</li>
              <li>Title: {getUser.title} </li>
              <li>Number:{getUser.number} </li>
              <li>departureTime: {items.departureTime} </li>
              <li>returnTime: {getUser.returnTime} </li>
              <li>Location: {getUser.location} </li>
            </ul>
           
          </div>

          <h1>{items.codsi} </h1>
         
          <div className="flex justify-between items-center">
            <p>
              Sincerely, <br />
              Hamze Abdi Barre <br />
              Prime Minister
            </p>
            <div className="text-8xl font-bold text-gray-300">PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
