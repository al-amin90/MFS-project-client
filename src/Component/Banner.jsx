import React from "react";

const Banner = () => {
  return (
    <div className="pt-16 w-[90%] mx-auto">
      <div className="flex flex-col items-center justify-center py-7 text-white">
        <h2 className="text-4xl">MFS</h2>
        <p className="text-xs text-center font-thin my-3">
          20% DISCOUNT FOR 1 MONTH ACCOUNT Next generation Payment Ways.
        </p>
        <h5>AL Amin Parvaz</h5>
        <div className="flex items-center gap-4 mt-4 px-4 py-[6px] text-[#00040F] font-bold rounded-full bg-white">
          <img className="w-6" src="/logo.webp" alt="" />
          <h6 className="tracking-tighter ">4000 Tk</h6>
        </div>
      </div>
    </div>
  );
};

export default Banner;
