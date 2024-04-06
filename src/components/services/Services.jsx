import React, { useState } from "react";

export default function Services() {
  const services = [
    {
      icon: "bx bxs-grid-alt",
      fName: `Product`,
    },
    {
      icon: "bx bx-code",
      fName: `Ui/Ux`,
    },
    {
      icon: "bx bx-edit",
      fName: `Visual`,
    },
  ];
  const [popToggle, setPopToggle] = useState(null);
  return (
    <section className="mb-40 pt-16 px-5 md:px-0" id="services">
      <h2 className="text-center text-title-color-dark text-3xl font-semibold">
        Services
      </h2>
      <span className="block text-center text-title-color font-thin  text-xs/none mb-20">
        What i offer
      </span>
      <div className="md:w-fit justify-self-center sm:mx-10 p-5 md:p-0 md:mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white px-10 rounded-md border border-gray-200  md:w-[300px] h-[270px] flex flex-col items-start justify-center gap-5">
              <i className={`${item.icon} text-2xl font-semibold`}></i>

              <h3 className="text-title-color-dark text-lg font-bold">
                {item.fName}
                <br />
                Designer
              </h3>

              <p
                onClick={() => setPopToggle(i)}
                className="text-title-color text-base cursor-pointer group">
                View More{" "}
                <i className="bx bxs-chevron-right group-hover:translate-x-2 transition-all duration-300 group-hover:text-title-color-dark"></i>
              </p>
              {/* pop up */}
              <div
                className={`${
                  popToggle === i
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } transition-all duration-300 fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center `}>
                {/* pop up card */}
                <div className="bg-white mx-10  flex flex-col px-5 py-10 rounded-xl gap-10">
                  {/* pop up close btn */}
                  <div
                    onClick={() => setPopToggle(null)}
                    className="flex justify-end cursor-pointer">
                    <i className="bx bx-x text-2xl"></i>
                  </div>
                  {/* pop up title */}
                  <div className="flex justify-center flex-col items-center gap-5">
                    <h3 className="text-title-color-dark text-2xl font-bold">
                      {item.fName} Designer
                    </h3>
                    <p className="w-[80%] text-center text-sm text-title-color ">
                      Service with 1 year of experience.Providing quality work
                      to clients and companies.
                    </p>
                  </div>
                  {/* pop up content */}
                  <div className="flex justify-start flex-col gap-3 text-xs text-title-color">
                    <span className="flex items-center gap-2">
                      <i className="bx bx-check-circle text-lg"></i>I develop
                      the user interface.
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="bx bx-check-circle text-lg"></i>Web page
                      development.
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="bx bx-check-circle text-lg"></i>I create ux
                      element interactions.
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="bx bx-check-circle text-lg"></i>I position
                      your company brand.
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="bx bx-check-circle text-lg"></i>Design and
                      mockups of products for companies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
