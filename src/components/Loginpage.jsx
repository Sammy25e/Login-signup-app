import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Loginpage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-900 to-purple-800 py-10 ">
      <div className="max-w-[1000px] mx-auto bg-white py-25">
        <div className=" flex flex-col items-center -mt-20">
          <h3 className="text-purple-800 text-2xl font-semibold">Sign UP</h3>
          <hr className="w-[61px] h-[6px] bg-purple-800 rounded-[9px]" />
        </div>
        {/* {signpage} */}
        <div className="mt-20 flex flex-col items-center">
          <div className="bg-gray-100 min-h-10 w-80 ">
            <div className="flex gap-3 items-center pt-1">
              <FaRegUser size={30} className="mt-1" />
              <input type="text" placeholder="Name" className="w-70" />
            </div>
          </div>
          <div className="bg-gray-100 min-h-10 w-80  mt-4 ">
            <div className="flex gap-3 items-center pt-1">
              <MdOutlineMail size={30} />

              <input type="text" placeholder=" Email" className="w-70" />
            </div>
          </div>
          <div className="bg-gray-100 min-h-10 w-80  mt-4 ">
            <div className="flex gap-3 items-center pt-1">
              <RiLockPasswordFill size={30} />
              <input type="text" placeholder=" password" className="w-70" />
            </div>
          </div>
          <div className="mt-3 pr-35">
            <p>
              lost password?
              <a href="" className="text-purple-700">
                Click here!
              </a>
            </p>
          </div>
          <div className="mt-10 flex gap-20">
            <h1 className="bg-purple-800 rounded-4xl px-7 text-white py-2 ">
              <a href="">Sign Up</a>
            </h1>
            <h2 className="bg-purple-800 rounded-4xl px-10 text-white py-2">
              <a href="">Login</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
