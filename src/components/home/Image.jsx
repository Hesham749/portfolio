import React from "react";
import img from "../../assets/hesham.jpg";
export default function Image() {
  return (
    <div className="w-60 h-60 md:w-80 md:h-80 md:order-1   ">
      <img
      loading="lazy"
        src={img}
        alt=""
        className="image w-full h-full  "
      />
    </div>
  );
}
