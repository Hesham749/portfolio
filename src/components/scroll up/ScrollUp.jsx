import React from "react";

export default function ScrollUp(props) {
  const { position } = props;
  console.log(position);
  return (
    <div
      onClick={(e) => window.scrollTo(0, 0)}
      className={`${
        position > 850 ? "visible opacity-100 " : " invisible opacity-0 "
      } fixed bottom-20 md:right-10 md:bottom-10 bg-title-color  hover:bg-title-color-dark text-center right-2 z-10  py-1 px-2 cursor-pointer rounded-md transition-all duration-500 ease-in-out group`}>
      <i className="bx bx-chevrons-up text-body-color font-semibold text-lg  group-hover:animate-pulse"></i>
    </div>
  );
}
