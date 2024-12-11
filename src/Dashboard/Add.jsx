import React, { useState } from "react";
import Sidebar1 from "./Sidebar1";
import axios from "axios";

const Add = () => {


  const [ID, setID ] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [number, setNumber] = useState("")


  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/create", {
        ID: ID,
        name: name,
        password: password,
        title: title,
        number: number,
      })
      .then((response) => {
        if (response.data) {
          alert("User has been created successfully");
          // Xogta user cusub lagu keydinayo localStorage
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        alert("Failed to create user. Please try again.");
      });
  };
  




  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar1 />

      {/* Main Section */}
      <div className="flex-1 flex items-center ml-[15%] justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
        {/* Form Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-[500px]">
          <h1 className="text-3xl font-bold text-[#6a6458] text-center mb-6">
            Create New Account
          </h1>
          <form className="space-y-6">
            {/* ID Field */}
            <div>
              <label
                htmlFor="id"
                className="block text-gray-700 font-medium mb-2"
              >
                ID
              </label>
              <input  value={ID} onChange={(event)=> setID(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a6458] focus:border-transparent"
                id="id"
                type="text"
                placeholder="Enter your ID" required 
              />
            </div>

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input value={name} onChange={(event)=> setName(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a6458] focus:border-transparent"
                id="name"
                type="text"
                placeholder="Enter your full name" required 
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input value={password} onChange={(event)=> setPassword(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a6458] focus:border-transparent"
                id="password"
                type="password"
                placeholder="Create your password" required 
              />
            </div>

            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Title
              </label>
              <input value={title} onChange={(event)=> setTitle(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a6458] focus:border-transparent"
                id="title"
                type="text"
                placeholder="Enter your title" required 
              />
            </div>

            {/* Number Field */}
            <div>
              <label
                htmlFor="number"
                className="block text-gray-700 font-medium mb-2"
              >
                Number
              </label>
              <input value={number} onChange={(event)=> setNumber(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a6458] focus:border-transparent"
                id="number"
                type="text"
                placeholder="Enter your number" required 
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button onClick={handleCreate}
                type="submit"
                className="bg-[#6a6458] hover:bg-[#594f44] text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a6458] transition-all duration-200"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
