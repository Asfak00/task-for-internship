import React, { useState } from "react";

// react icons
import { RxCross1 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

// react toastify message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// framer motion
import { motion } from "framer-motion";

// global styles
import styles from "../../styles/styles";

const CreateTask = ({ setCreateTask }) => {
  return (
    <div className="bg-white">
      <div className="w-full h-screen fixed top-0 left-0 bg-[#00000030] flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          className="w-[90%] 800px:w-[60%] h-[90vh] 800px:h-[75vh] rounded-md  relative shadow-sm overflow-y-scroll bg-[#ECF0F9]">
          <div className="bg-[#C6D3EC] w-full flex items-center justify-between px-8 py-2">
            <h3 className="text-[#132039] font-semibold text-[1.2rem]">
              Create Task
            </h3>
            <RxCross1
              size={40}
              color="#333"
              className=" text-[#132039] cursor-pointer p-2 hover:bg-gray-200 hover:text-gray-50 rounded-full"
              onClick={() => setCreateTask(false)}
            />
          </div>

          <form className="w-full px-8 mt-10">
            <label htmlFor="title" className="font-semibold text-[#132039]">
              Title
            </label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title Here"
              className="bg-[#D9E1F2] w-full mt-2 mb-6 rounded border border-[#9FB5DF] outline-none placeholder:text-[##D9E1F2] py-2 px-4"
            />
            <br />

            <div className="flex items-center justify-between w-full">
              <div className="w-[48%]">
                <label
                  htmlFor="startDate"
                  className="font-semibold text-[#132039]">
                  Starts
                </label>
                <br />
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="bg-[#D9E1F2] w-full mt-2 mb-6 rounded border border-[#9FB5DF] outline-none placeholder:text-[##D9E1F2] py-2 px-4"
                />
                <br />
              </div>

              <div className="w-[48%]">
                <label
                  htmlFor="endDate"
                  className="font-semibold text-[#132039]">
                  Ends
                </label>
                <br />
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  className="bg-[#D9E1F2] w-full mt-2 mb-6 rounded border border-[#9FB5DF] outline-none placeholder:text-[##D9E1F2] py-2 px-4"
                />
                <br />
              </div>
            </div>

            <label htmlFor="title" className="font-semibold text-[#132039]">
              Description
            </label>
            <br />
            <textarea
              type="text"
              name="title"
              id="title"
              placeholder="Description Here"
              className="bg-[#D9E1F2] w-full h-[150px] mt-2 mb-6 rounded border border-[#9FB5DF] outline-none placeholder:text-[##D9E1F2] py-2 px-4"></textarea>
            <br />

            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="priority"
                className="font-semibold text-[#132039]">
                Priority Level
              </label>
              <select
                name="priority "
                id="priority"
                className="bg-[#D9E1F2] w-[70%] rounded border border-[#9FB5DF] outline-none placeholder:text-[##D9E1F2] py-2 px-4">
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>

            <button
              className={`${styles.button} flex mt-8 items-center gap-2 bg-[#406BBF]  w-full !rounded text-[#ECF0F9] py-2 justify-center`}>
              Create Task
            </button>
          </form>
        </motion.div>

        {/* toast message */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
};

export default CreateTask;