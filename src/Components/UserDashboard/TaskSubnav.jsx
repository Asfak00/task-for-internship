import React from "react";

// react icons
import { SlArrowDown } from "react-icons/sl";

const TaskSubnav = () => {
  return (
    <nav className="w-full flex items-center justify-between px-32 py-6">
      <h3 className="text-[#264073] ">
        <b>6</b> task found
      </h3>
      <form>
        <label htmlFor="sort" className="text-[#264073] font-bold">
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="border-[#264073] rounded ml-3 border-[1px] text-[#31466b] bg-[#c6d3ecdc] outline-none px-3 py-1">
          <option value="priority">Priority</option>
          <option value="date">Date</option>
        </select>
      </form>
    </nav>
  );
};

export default TaskSubnav;
