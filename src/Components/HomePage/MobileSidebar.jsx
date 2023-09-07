import React from "react";

// react icons
import { RxCross1 } from "react-icons/rx";

const MobileSidebar = ({ setOpen }) => {
  return (
    <div className="w-full h-screen fixed top-0 right-0 bg-[#0d1526d3] z-50">
      <div className="w-[60%] h-[100vh] bg-[#0D1526] dark:bg-[#D9E1F2]">
        <div className="w-full flex justify-end items-end p-2">
          <RxCross1
            className="p-2 rounded-full hover:bg-[#C6D3EC] transition duration-300"
            size={30}
            onClick={() => setOpen(false)}
          />
        </div>
        <ul className=" px-6 flex uppercase font-semibold text-[#132039] items-center gap-6 flex-col mt-8">
          <li className="hover:bg-[#C6D3EC] py-2 w-full text-center">Home</li>
          <li className="hover:bg-[#C6D3EC] py-2 w-full text-center">
            About Us
          </li>
          <li className="hover:bg-[#C6D3EC] py-2 w-full text-center">
            Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
