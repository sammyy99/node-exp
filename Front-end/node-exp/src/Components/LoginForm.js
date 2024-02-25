import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const LoginForm = () => {

  const userName = useRef()
  const pwd = useRef()

  const navigate = useNavigate()

  const handleSubmit = async ()=>{
    try {
       const response = await axios.post('http://localhost:5000/logindata', {
        user: userName.current.value,
        pwd: pwd.current.value,
      });
         if (response.status == 200) {
          navigate("/home")
         }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className=""
    >
      <div className="py-10 px-14 bg-slate-50 bg-opacity-10 rounded-xl shadow-xl shadow-white text-white">
        <div className="my-3 mb-10 flex w-full justify-center text-2xl">
          <h1>Login Here</h1>
        </div>
        <div className="my-6">
          <input
          ref={userName}
            className="py-2 px-2 rounded-xl w-72 text-black bg-transparent border border-gray-400 outline-none"
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="my-6">
          <input
          ref={pwd}
            className="py-2 px-2 rounded-xl w-72 text-black bg-transparent border border-gray-400 outline-none"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="my-3 mt-9 flex w-full justify-center">
          <button className="py-2 px-2 rounded-xl w-72 text-white text-lg font-semibold bg-transparent border border-gray-400 outline-none shadow-white shadow-sm">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
