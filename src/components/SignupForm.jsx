import { useNavigate } from "react-router-dom";


const SignupForm = () => {

  const navigate=useNavigate()

  return (
    <div className="w-[400px]">
      <h1 className="text-2xl font-semibold mb-1">Create an account</h1>
      <p className="text-gray-500 text-sm mb-8">
        Get started with your secure data room today
      </p>

      {/* Folder name */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Enter name here"
          className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">Email ID</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">Password</label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

       <div className="">
        <button className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium">
          Create Account
        </button>
      </div>

      <p onClick={()=>navigate('/signin')} className="text-sm text-center mt-3 cursor-pointer">Already have an account? <span className="underline">Sign in</span> </p>
    </div>
  );
};

export default SignupForm;
