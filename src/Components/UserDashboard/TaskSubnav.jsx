import React from "react";

// react icons
import { SlArrowDown } from "react-icons/sl";

const TaskSubnav = ({ totalTask }) => {
  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <nav className="w-full flex items-center justify-between 800px:px-32 px-2 py-6">
      <h3 className={`${darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"}`}>
        <b>{totalTask}</b> task found
      </h3>
      <form>
        <label
          htmlFor="sort"
          className={`${
            darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"
          } font-bold`}>
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="border-[#264073] cursor-pointer rounded ml-3 border-[1px] text-[#31466b] bg-[#c6d3ecdc] outline-none px-3 py-1">
          <option value="priority">Priority</option>
          <option value="date">Date</option>
        </select>
      </form>
    </nav>
  );
};

export default TaskSubnav;
