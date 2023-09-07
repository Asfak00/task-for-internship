import React from "react";

// avatar image
import avatar from "../../assets/avatar.png";
import { toast } from "react-toastify";

const Notification = () => {
  // get the user name and image from local storage
  const username = JSON.parse(localStorage.getItem("userName"));
  const photUrl = JSON.parse(localStorage.getItem("PhotoUrl"));

  //  get todos from local storage
  const todos = JSON.parse(localStorage.getItem("todo"));

  return (
    <div className="p-6">
      <h3 className="font-bold text-[#132039] text-2xl mb-6">Notifications</h3>

      {todos.map((todo) => (
        <div className="bg-[#D9E1F2] w-full rounded mt-4 p-4 flex items-center gap-8">
          <img
            src={photUrl ? photUrl : avatar}
            alt="avatar/image"
            className="w-[60px] h-[60px] rounded-full border border-[#406BBF] "
          />
          <div>
            <h3 className="text-[#132039] ">
              <span>{username}</span> <b>Created</b> a task
            </h3>
            <p>4 min ago</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;