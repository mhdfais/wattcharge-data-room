const ForgotPasswordForm = () => {
  return (
    <div className="w-[400px]">
      <h1 className="text-2xl font-semibold mb-1">Create New Password</h1>
      <p className="text-gray-500 text-sm mb-6">
        Set a strong password to secure your account.
      </p>

      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="text-xs mt-1 font-extralight">Minimum 8 characters</p>
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">
          Confirm password
        </label>
        <input
          type="password"
          placeholder="Re-enter new password"
          className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="">
        <button className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
