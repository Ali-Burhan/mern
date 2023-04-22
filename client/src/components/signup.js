import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [formData,setFormData] = useState({name:"",email:"",password:"",confirmpassword:""});
var name;
var value;
const handleChange = (e) => {
value = e.target.value;
name = e.target.name;
setFormData({...formData,[name]:value});
}

const Navigate = useNavigate();
const handleSubmit = async (e) => {
  const {name,email,password,confirmpassword} = formData;
  e.preventDefault();
  const res = await fetch("/signup",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,password,confirmpassword
    })
  })
  if(!res.ok){
    window.alert("User Already Exist")
  }
  else{
    const data = await res.json();
    console.log(data);
    Navigate("/")
  }
}
  return (
    <>
    <div className="py-20 h-screen bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                <div className="md:flex">
                    <div className="w-full p-3 px-6 py-10">

                      <div className="text-center">
                        <span className="text-xl text-gray-700">Registration Form</span>
                      </div>
                      
                       <div className="mt-3 relative">
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Full name</span>
                        <input name='name' value={formData.name} onChange={handleChange} type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/>
                       </div>

                       <div className="mt-4 relative">
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span>
                        <input name='email' onChange={handleChange} value={formData.email} type="email" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/>
                       </div>


                       <div className="mt-4 relative">
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span>
                        <input name='password' onChange={handleChange} value={formData.password} type="password" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/>
                       </div>

                       <div className="mt-4 relative">
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Confirmpassword</span>
                        <input name='confirmpassword' onChange={handleChange} value={formData.confirmpassword} type="password" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"/>
                       </div>

                       <div className="mt-4">

                        <button onClick={handleSubmit} className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700">Click to proceed <i className="fa fa-long-arrow-right"></i></button>
                         
                       </div>


                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup