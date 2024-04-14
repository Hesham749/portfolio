import React from "react";

export default function Info() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
      <div className="bg-white py-3 px-5 md:px-0  border-[1px] border-gray-200 rounded-xl flex flex-col items-center justify-start ">
        <i className="bx bx-award text-2xl"></i>
        <h3 className="font-semibold">Frontend</h3>
        <span className=" text-title-color text-sm mt-1">React Developer</span>
      </div>
      <div className="bg-white py-3 px-5 md:px-0 border-[1px] border-gray-200 rounded-xl flex flex-col items-center justify-start">
        <i className="bx bx-briefcase-alt text-2xl"></i>
        <h3 className="font-semibold">Completed</h3>
        <span className=" text-title-color text-sm mt-1">5 + Projects</span>
      </div>
      <div className="bg-white py-3 px-5 md:px-0 border-[1px] border-gray-200 rounded-xl flex flex-col items-center justify-start">
        <i className="bx bx-headphone text-2xl"></i>
        <h3 className="font-semibold">Support</h3>
        <span className=" text-title-color  text-sm mt-1">Online 24/7</span>
      </div>
    </div>
  );
}
