import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {

  const navigate = useNavigate()
  const [login, setlogin] = useState("")
  const [ID, setID] = useState("")
  const [password, setPassword] = useState("")

        const handlelogin = (e)=>{
          e.preventDefault()
          axios.post("http://localhost:3000/user/login",{
            ID: ID,
            password: password,

          }).then((response)=>{
              if(response.data.error){
                alert("id or password incorrect")
              }
              else{
                alert("login successful")
                localStorage.setItem("user", JSON.stringify(response.data))
                navigate("FormTable")
              }
          })
        }




  return (
    <div>
      <div className="bg-[#6b6252] h-[80px] w-full">
      <h1 className="text-4xl font-bold text-white pt-4 text-center mb-6">iDan</h1>

      </div>
      <div className="flex justify-center items-center h-[510px] bg-gray-100">
        <div className="bg-white shadow-lg  rounded-lg p-4 w-[400px] h-[400px] ">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-0">iDan</h1>
          <form>
            <div className="mb-14">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="id"
              >
                ID
              </label>
              <input  value={ID} onChange={(event)=> setID(event.target.value)}
                className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                id="id"
                type="text"
                placeholder="Enter your ID" required
              />
            </div>
            <div className="mb-14">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input  value={password} onChange={(event)=> setPassword(event.target.value)}
                className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                id="password"
                type="password"
                placeholder="Enter your password" required
              />
            </div>
            <div className="flex items-center justify-center">
              
              
              <button onClick={handlelogin} type="submit">Login</button>
              
         
            </div>
        <Link
          to="/Dashboard"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-all"
        >
          <i className="fas fa-home text-2xl mb-2"></i>
        </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
