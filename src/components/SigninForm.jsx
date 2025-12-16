import React from "react";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {

    const navigate=useNavigate()

  return (
    <div className="w-[400px]">
      <h1 className="text-2xl font-semibold mb-1">Sign in to your account</h1>
      <p className="text-gray-500 text-sm mb-8">
        Enter your credentials to access your data room
      </p>

      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">Email ID</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-10">
        <label className="text-sm font-medium block mb-2">Password</label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
        <p onClick={()=>navigate('/forgot-password')} className="text-sm float-right mt-1 hover:underline cursor-pointer">Forgot Password?</p>
      </div>

      <div className="">
        <button className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium">
          Sign In
        </button>
      </div>
      <p onClick={()=>navigate('/signup')} className="text-sm text-center mt-3 cursor-pointer">
        Don't have an account? <span className="underline">Sign up</span>
      </p>
    </div>
  );
};

export default SigninForm;
