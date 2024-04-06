import React from "react";

export default function Info() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
      <div className="bg-white py-3 px-5  border-[1px] border-gray-200 rounded-xl flex flex-col items-center justify-start ">
        <i className="bx bx-award text-xl"></i>
        <h3 className="">Experience</h3>
        <span className=" text-title-color">1 Year Working</span>
      </div>
      <div className="bg-white py-3 px-5  border-[1px] border-gray-200 rounded-xl flex flex-col items-center justify-start">
        <i className="bx bx-briefcase-alt text-xl"></i>
        <h3 className="">Completed</h3>
        <span className=" text-title-color">20 + Projects</span>
      </div>
      <div className="bg-white py-3 px-5  border-[1px] border-gray-200 rounded-xl flex flex-col items-center justify-start">
        <i className="bx bx-headphone text-xl"></i>
        <h3 className="">Support</h3>
        <span className=" text-title-color ">Online 24/7</span>
      </div>
    </div>
  );
}
