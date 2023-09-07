import React, { useState } from "react";

const DashboardNav = ({ active, setActive }) => {
  return (
    <nav className="bg-[#C6D3EC] w-full flex items-center justify-center">
      <ul className="flex items-center justify-between w-[70%] mx-auto">
        <li
          className={`py-4 px-12 cursor-pointer ${
            active === 1 ? "border-b-[4px] border-[#2557bb]" : null
          }`}
          onClick={() => setActive(1)}>
          All
        </li>
        <li
          className={`py-4 px-12 cursor-pointer ${
            active === 2 ? "border-b-[4px] border-[#2557bb]" : null
          }`}
          onClick={() => setActive(2)}>
          Completed
        </li>
        <li
          className={`py-4 px-12 cursor-pointer ${
            active === 3 ? "border-b-[4px] border-[#2557bb]" : null
          }`}
          onClick={() => setActive(3)}>
          Incompleted
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
