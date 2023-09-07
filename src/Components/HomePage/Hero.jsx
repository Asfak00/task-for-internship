import React from "react";

// styles
import styles from "../../styles/styles";

// images
import mobileImage from "../../assets/mobile.svg";
import pcImage from "../../assets/pc.svg";

const Hero = () => {
  return (
    <section className="dark:text-[#9bbbfa] px-8 max-w-[1200px] mx-auto mt-24 flex justify-between items-center">
      <div className="w-[50%] ">
        <h1 className="dark:text-[#9bbbfa] text-5xl text-[#132039] font-bold">
          Smash all of your <br /> ideas into one place
        </h1>
        <p className="w-[85%] dark:text-slate-500 text-[#264073] mt-4 mb-12">
          <b className="dark:text-[#7997D2] text-[#264073]">Collaborate</b> with
          your
          <b className="dark:text-[#7997D2] text-[#264073]">friends</b> to help
          you make your journey of bringing them to live a bit more
          <b className="dark:text-[#7997D2] text-[#264073]">fun</b>.
        </p>
        <div className="flex items-center gap-8">
          <button
            className={`${styles.button} dark:bg-[#7997D2] bg-[#406BBF] text-white dark:text-black font-semibold py-2 px-8 !rounded`}>
            Login
          </button>
          <button
            className={`${styles.button} font-semibold dark:bg-[#132039] py-2 px-6 !rounded bg-[#D9E1F2] text-[#132039]`}>
            Sign Up
          </button>
        </div>
        <p className="dark:text-slate-500 text-[#264073]">
          <b className="dark:text-[#7997D2] text-[#264073]">23</b> people are
          already enjoying our app
        </p>
      </div>
      <div className="w-[50%] ">
        <div className=" relative">
          <img src={pcImage} alt="image/pcImage" className="w-[600px]" />
          <img
            src={mobileImage}
            alt="image/pcImage"
            className="w-[150px] absolute bottom-[-40%] left-[10%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
