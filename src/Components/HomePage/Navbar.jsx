import React, { useEffect, useState } from "react";

// logo image
import logo from "../../assets/logo.svg";

// styles
import styles from "../../styles/styles";

// icons
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [toggle, setToggle] = useState(
    JSON.parse(localStorage.getItem("theme"))
      ? JSON.parse(localStorage.getItem("theme"))
      : true
  );

  const [open, setOpen] = useState(false);

  localStorage.setItem("theme", JSON.stringify(toggle));

  const element = document.documentElement;

  useEffect(() => {
    if (toggle) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [toggle]);

  return (
    <>
      <nav className="flex items-center justify-between w-full px-8 py-6 max-w-[1200px] mx-auto">
        <img src={logo} alt="logo" className="800px:w-[190px] w-[150px]" />

        <ul className=" items-center 800px:flex hidden  font-semibold text-[#132039] gap-8 list-none uppercase dark:text-[#9bbbfa]">
          <li className={styles.menuHover}>home</li>
          <li className={styles.menuHover}>about us</li>
          <li className={styles.menuHover}>support</li>
        </ul>
        <div className="flex items-center gap-5">
          <button>
            {toggle ? (
              <BsSun
                onClick={() => setToggle(!toggle)}
                size={20}
                className="dark:text-[#9bbbfa] text-[#132039]"
              />
            ) : (
              <BsMoon
                onClick={() => setToggle(!toggle)}
                size={20}
                className="dark:text-[#9bbbfa] text-[#132039]"
              />
            )}
          </button>
          <button className="800px:hidden flex" onClick={() => setOpen(true)}>
            <AiOutlineMenu
              size={20}
              className="dark:text-[#9bbbfa] text-[#132039]"
            />
          </button>
        </div>
      </nav>
      {open && <MobileSidebar setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
