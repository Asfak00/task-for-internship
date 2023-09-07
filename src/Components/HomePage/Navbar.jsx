import React, { useEffect, useState } from "react";

// logo image
import logo from "../../assets/logo.svg";

// styles
import styles from "../../styles/styles";

// icons
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(
    JSON.parse(localStorage.getItem("theme"))
      ? JSON.parse(localStorage.getItem("theme"))
      : true
  );

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
        <img src={logo} alt="logo" className="w-[190px]" />

        <ul className="flex items-center font-semibold text-[#132039] gap-8 list-none uppercase dark:text-[#9bbbfa]">
          <li className={styles.menuHover}>home</li>
          <li className={styles.menuHover}>about us</li>
          <li className={styles.menuHover}>support</li>
        </ul>
        <div>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
