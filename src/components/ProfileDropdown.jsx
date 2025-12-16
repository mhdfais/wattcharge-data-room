import { FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 top-14 w-64 bg-[#F2F4F5] rounded-sm p-3 shadow-xl  z-50">
      {/* User Info */}
      <div className="flex items-center gap-3 pb-2">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">John Paul</p>
          <p className="text-xs text-gray-500">johnpaul@gmail.com</p>
        </div>
      </div>

      {/* Actions */}
      <div className="">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 border-t cursor-pointer">
          <FaQuestionCircle className="text-black" />
          Help & Support
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 text-black border-t cursor-pointer">
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-2 text-[11px] text-gray-400 py-2 border-t">
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <p>|</p>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default ProfileDropdown