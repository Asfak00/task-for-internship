import React from "react";

// avatar image
import avatar from "../../assets/avatar.png";

// react icons
import { AiOutlinePlus } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

// styles
import styles from "../../styles/styles";

const DashboardSidebar = () => {
  return (
    <>
      <aside className="w-full bg-[#D9E1F2] p-8 h-[100vh]">
        <div className="w-full flex items-center justify-center flex-col">
          <img
            src={avatar}
            alt="avatar/image"
            className="w-[80px] border border-[#406BBF] h-[80px] rounded-full bg-cover bg-no-repeat"
          />
          <h3 className="text-[#406BBF] font-bold text-2xl mt-2">Rahi Ahmed</h3>
        </div>

        <button
          className={`${styles.button} flex  items-center gap-2 bg-[#406BBF]  w-full !rounded text-[#ECF0F9] py-2 justify-center mt-12`}>
          <p className="text-[1.2rem] font-semibold 800px:block hidden">
            Create Task
          </p>
          <AiOutlinePlus className="font-bold" />
        </button>

        <div className="w-full bg-[#C6D3EC] mt-12">
          <button className={styles.userDashboardBtn}>
            <BiHomeAlt2 className="text-[#264073]" />
            Home
          </button>
          <button className={styles.userDashboardBtn}>
            <CiSearch className="text-[#264073]" />
            Search
          </button>
          <button className={styles.userDashboardBtn}>
            <IoNotificationsOutline className="text-[#264073]" />
            Notification
          </button>
          <button className={styles.userDashboardBtn}>
            <RxAvatar className="text-[#264073]" />
            Account
          </button>
        </div>

        <button className="bg-[#C6D3EC]  hover:bg-[#9FB5DF] transition duration-300 rounded p-4 mt-12 w-full flex items-center gap-2">
          <IoLogOutOutline className="text-[#264073]" />
          Logout
        </button>
      </aside>
    </>
  );
};

export default DashboardSidebar;
