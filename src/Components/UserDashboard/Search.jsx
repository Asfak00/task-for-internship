import React from "react";

// react icons
import { CiSearch } from "react-icons/ci";

// manually imported components
import TaskSubnav from "./TaskSubnav";
import Task from "./Task/Task";

const Search = () => {
  // getting the todo data from local storage
  const allTodos = JSON.parse(localStorage.getItem("todo"));

  return (
    <div className="800px:flex-row flex-col flex justify-between p-2 800px:p-6 w-full 800px:w-[85%] mx-auto">
      <div className="bg-[#D9E1F2] 800px:mb-0 mb-3 w-full 800px:w-[25%] h-[120px] border-[2px] border-[#bdcef3] p-4 rounded">
        <h3 className="font-bold text-1xl mb-2 text-[#6689CC]">Filter</h3>
        <input type="checkbox" name="" id="" />
        <span className="ml-2 text-[#264073]">Name </span>
        <br />
        <input type="checkbox" name="" id="" />
        <span className="ml-2 text-[#264073]">Priority</span>
      </div>
      <div className="w-full 800px:w-[70%]">
        <div className="w-full relative">
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
        <TaskSubnav totalTask={6} padding={2} />

        <div className="grid grid-cols-1 gap-5">
          {allTodos?.map((todo) => (
            <Task todoData={todo} className="mt-2" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
