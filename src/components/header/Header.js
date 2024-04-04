import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const links = [
    {
      name: "Home",
      path: "#",
      icon: "home-alt",
    },
    {
      name: "About",
      path: "#",
      icon: "user",
    },
    {
      name: "Skills",
      path: "#",
      icon: "file",
    },
    {
      name: "Services",
      path: "#",
      icon: "briefcase-alt-2",
    },
    {
      name: "Portfolio",
      path: "#",
      icon: "image-alt",
    },
    {
      name: "Contact",
      path: "#",
      icon: "send",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar className="fixed bottom-0 md:sticky md:top-0 w-full px-7 md:px-0 bg-body-color ">
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-700">
            Hesham
          </span>
        </Navbar.Brand>
        <div className="flex  md:order-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative text-center ">
            {isOpen ? (
              <i className="bx bx-x text-2xl md:hidden  "></i>
            ) : (
              <i className="bx bx-grid-alt text-xl md:hidden"></i>
            )}

            <Navbar.Toggle className="absolute left-0 max-w-full top-0 opacity-0 " />
          </div>
        </div>
        <Navbar.Collapse className="absolute bottom-[100%]  left-0 md:static">
          <div className=" font-medium grid  grid-cols-3 gap-3 p-4 md:flex md:p-0 mt-4 border bg-gray-50 md:bg-transparent border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {links.map((link, i) => (
              <Navbar.Link
                onClick={(e) => {
                  [...document.querySelectorAll("a.active")].map((a) =>
                    a.classList.remove("active")
                  );
                  e.target.classList.add("active");
                  setIsOpen(false)
                }}
                key={i}
                href="#"
                className={`${
                  i === 0 && "active"
                } flex flex-col items-center font-bold py-2 px-3 rounded border-none text-gray-500 hover:text-title-color-dark  `}>
                <i className={`bx bx-${link.icon} md:hidden `}></i>
                {link.name}
              </Navbar.Link>
            ))}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
