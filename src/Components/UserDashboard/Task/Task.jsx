import React, { useState } from "react";

// react icons
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Modal from "../../Modal/Modal";

const Task = () => {
  const [todoDelete, setTodoDelete] = useState(false);
  const [todoEdit, setTodoEdit] = useState(false);

  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  // getting the todo data from local storage
  const todoData = JSON.parse(localStorage.getItem("todoItem"));

  return (
    <>
      <div
        className={` w-full rounded p-4 transition duration-300 ${
          darkTheme
            ? "bg-[#0D1526] hover:bg-[#264073]"
            : "bg-[#D9E1F2] hover:bg-[#C6D3EC] "
        }`}>
        <div className="flex items-center justify-between w-full">
          <h3
            className={`${
              darkTheme ? "text-[#D9E1F2]" : "text-[#132039]"
            } font-bold`}>
            {todoData?.title}
          </h3>
          <input type="checkbox" className=" cursor-pointer" />
        </div>

        <div className="py-4 border-b border-[#8CA6D9]">
          <p
            className={`${
              darkTheme ? "text-[#D9E1F2]" : "text-[#132039]"
            } line-clamp-2 `}>
            {todoData?.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p
            className={`${
              darkTheme ? "text-[#8CA6D9]" : "text-[#264073]"
            }  flex items-center gap-1 font-semibold text-[0.9rem]`}>
            <AiOutlineClockCircle
              className={`${
                darkTheme ? "text-[#8CA6D9]" : "text-[#406BBF]"
              }  cursor-pointer`}
            />
            <span>{todoData?.startDate}</span>{" "}
            <span className="text-2xl font-bold">-</span>{" "}
            <span>{todoData?.endDate}</span>
          </p>
          <div className="flex items-center gap-3">
            <BiEdit
              className={`${
                darkTheme ? "text-[#8CA6D9]" : "text-[#406BBF]"
              }  cursor-pointer`}
              onClick={() => setTodoEdit(true)}
            />
            <RiDeleteBin5Fill
              className={`${
                darkTheme ? "text-[#8CA6D9]" : "text-[#406BBF]"
              }  cursor-pointer`}
              onClick={() => setTodoDelete(true)}
            />
          </div>
        </div>
      </div>

      {todoDelete && <Modal setTodoDelete={setTodoDelete} />}
    </>
  );
};

export default Task;
