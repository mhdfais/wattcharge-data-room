import { useState } from "react";

const AddFolderForm = () => {
  const [passwordEnabled, setPasswordEnabled] = useState(true);

  return (
    <div className="w-[80vh]">
      <h1 className="text-2xl font-semibold mb-1">Create New Folder</h1>
      <p className="text-gray-500 text-sm mb-5">
        Organize your client documents by creating a secure new folder.
      </p>

      {/* Folder name */}
      <div className="mb-5">
        <label className="text-sm font-medium block mb-2">
          Folder Name
        </label>
        <input
          type="text"
          placeholder="Enter folder name"
          className="w-full px-3 py-1 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Password protection */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <label className="text-sm font-medium block">
            Password Protection
          </label>
          <p className="text-xs text-gray-400">
            Add an extra layer of security to this folder.
          </p>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setPasswordEnabled(!passwordEnabled)}
          className={`w-11 h-6 flex items-center rounded-full px-1 transition ${
            passwordEnabled ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`bg-white w-4 h-4 rounded-full transform transition ${
              passwordEnabled ? "translate-x-5" : ""
            }`}
          />
        </button>
      </div>

      {/* Password box */}
      {passwordEnabled && (
        <div className="bg-gray-100 p-4 rounded-sm mb-5">
          <div className="mb-2">
            <label className="text-sm font-medium block mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="enter password here"
              className="w-full px-3 py-1 rounded-sm bg-white outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="re-enter password here"
              className="w-full px-3 py-1 rounded-sm bg-white outline-none"
            />
          </div>
        </div>
      )}

      {/* Access */}
      <div className="mb-5">
        <select className="w-full px-4 py-3 rounded-sm bg-gray-100 outline-none">
          <option>Access</option>
        </select>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button className="bg-slate-900 text-white px-6 py-2 rounded-sm text-sm">
          Create Folder
        </button>
      </div>
    </div>
  );
};

export default AddFolderForm;
