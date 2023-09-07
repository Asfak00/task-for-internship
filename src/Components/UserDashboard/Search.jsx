import React from "react";

// react icons
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex gap-6 p-6">
      <div className="bg-[#D9E1F2] border-[2px] border-[#bdcef3] p-4 rounded">
        <h3 className="font-bold text-1xl mb-2 text-[#6689CC]">Filter</h3>
        <input type="checkbox" name="" id="" />
        <span className="ml-2 text-[#264073]">Name </span>
        <br />
        <input type="checkbox" name="" id="" />
        <span className="ml-2 text-[#264073]">Priority</span>
      </div>
      <div className="w-[80%] relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search...."
          className="py-2 px-4 border-[2px] outline-none rounded bg-[#D9E1F2] border-[#bdcef3] w-full"
        />
        <CiSearch
          className=" absolute top-3 right-2 text-[#243c69]"
          size={20}
        />
      </div>
    </div>
  );
};

export default Search;
