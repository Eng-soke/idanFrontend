import React from "react";
import Sidebar from "./Sidebar"
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import View from "./View"
import axios from "axios";
const FormTable = () => {


  const getUser = localStorage.getItem("user")

  
  const [data, setData] = useState([])

  const handleGetAllData=()=>{
    axios.get("http://localhost:3000/allrequests").then((response)=>{
        setData(response.data)
  
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    handleGetAllData()
  },[])




  return (
    <div className="flex gap-10">
      <Sidebar />

      {
        data.map((item)=>{
            return <View items={item} />
        })
      }


      <div className="w-full min-h-screen  ml-[18%] -[5%] bg-gradient-to-br  to-gray-100 p-8">
        {/* Page Title */}
        <h1 className="text-center text-3xl font-extrabold text-[#6a6458] pb-10">
          Pending Requests
        </h1>

        <div className="">

          <div className="w-[900px] h-[70px] shadow-2xl bg-gray-300 rounded flex justify-between items-center p-4">
            <div className="p-3 items-center flex">
            <FaUserCircle className="w-[50px] h-[50px] " />

            {
            getUser ? 
              <div>
                <h1 className="text-2xl p-3">{JSON.parse(getUser).name}</h1>
              </div>
             : 
              <p>Wax xog hore uma dirsan</p>
            
          }



            

            </div>
            <Link to="/View">
            <h1 className="text-3xl ">View</h1>
            </Link>
          </div>

        </div>

       
      </div>
    </div>
  );
};

export default FormTable;
