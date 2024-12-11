import React from "react";
import axios from "axios";
import { useState } from "react";
import Sidebar from "./Sidebar";


 const RequestFrom = () => {

    
  const [ID, setID] = useState("")
  const [name, setName] = useState("")
  const [codsi, setCodsi] = useState("")
  const [workPlace, setWorkPlace] = useState("")
  const [departureTime, setDepartureTime] = useState("")
  const [returnTime, setReturnTime] = useState("")
  const [location, setLocation] = useState("")
 



  const handleCreate=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/codsi",{
      ID: ID,
      name: name,
      codsi: codsi,
      workPlace: workPlace,
      departureTime: departureTime,
      returnTime: returnTime,
      location: location
  }).then(()=>{
    alert("Request has been sent successfully")
  })
  }






  return (
    <div>
        {/* <Sidebar /> */}
        <Sidebar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f4f8]">
     

       <div className="ml-[10%] p-10 ">
        <form className="bg-gray-400 py-10 border-2 border-[#6b6252] ">
                <input value={ID} onChange={(event)=> setID(event.target.value)} className="w-[400px] h-[50px]  border-b-2 border-[#6b6252] rounded m-3 " type="text" placeholder="Enter yor ID"/>
                <input value={name} onChange={(event)=> setName(event.target.value)} className="w-[400px] h-[50px] border-b-2 border-[#6b6252] rounded m-3 " type="text" placeholder="Enter yor Name"/>
                <br/>
                <input value={workPlace} onChange={(event)=> setWorkPlace(event.target.value)} className="w-[400px] h-[50px] border-b-2 border-[#6b6252] rounded m-3 " type="text" placeholder="Enter workPlace"/>
                <input value={departureTime} onChange={(event)=> setDepartureTime(event.target.value)} className="w-[400px] h-[50px] border-b-2 border-[#6b6252] rounded m-3 " type="date" placeholder="Enter departureTime"/>
                <br/>
                <input value={returnTime} onChange={(event)=> setReturnTime(event.target.value)} className="w-[400px] h-[50px]  border-b-2 border-[#6b6252] rounded m-3 " type="date" placeholder="Enter returnTime"/>
                <input value={location} onChange={(event)=> setLocation(event.target.value)} className="w-[400px] h-[50px] border-b-2 border-[#6b6252] rounded m-3 " type="text" placeholder="Enter location in or out"/>
                <br/> 
                <textarea
                    value={codsi}
                    onChange={(event) => setCodsi(event.target.value)}
                    className="w-[830px] h-[100px] border-2 border-[#6b6252] rounded m-3 p-2"
                    placeholder="Enter codsi"
                  ></textarea>                <br/> 
                <button onClick={handleCreate}  className="bg-[#6b6252] rounded py-3 px-20 text-white ml-10">Create</button>
                
            </form>
    </div>
     
      </div>
    </div>
    
  );
};

export default RequestFrom;
