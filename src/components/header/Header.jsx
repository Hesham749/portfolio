import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";

export default function Header() {
  const links = [
    {
      name: "Home",
      path: "#",
      icon: "home-alt",
    },
    {
      name: "About",
      path: "#about",
      icon: "user",
    },
    {
      name: "Skills",
      path: "#skills",
      icon: "file",
    },
    {
      name: "Services",
      path: "#services",
      icon: "briefcase-alt-2",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
      icon: "image-alt",
    },
    {
      name: "Contact",
      path: "#contact",
      icon: "send",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [position, setPosition] = useState(0);
  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    // ! another syntax to get the scroll value
    // window.onscroll=() => handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        className={`${
          position > 0 && "md:shadow-md"
        } fixed bottom-0 md:sticky md:top-0 w-full px-5   bg-body-color `}>
        <Navbar.Brand href="#">
          <span className="self-center  text-xl  font-semibold text-title-color-dark">
            Hesham
          </span>
        </Navbar.Brand>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex   md:order-2 md:hidden relative text-center overflow-hidden ">
          {isOpen ? (
            <i className="bx bx-x text-2xl md:hidden font-bold "></i>
          ) : (
            <i className="bx bx-grid-alt text-2xl md:hidden"></i>
          )}

          <Navbar.Toggle className="absolute left-0 w-full max-w-full h-full top-0 opacity-0 " />
        </div>
        <Navbar.Collapse className="absolute bottom-[100%]  left-0 md:static">
          <div className=" font-medium grid  grid-cols-3 gap-3 p-4 md:flex md:p-0 mt-4 border bg-gray-50 md:bg-transparent border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {links.map((link, i) => (
              <Navbar.Link
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                key={i}
                href={`${link.path}`}
                className={`${
                  activeLink === link.name ? "text-black" : "text-gray-500"
                } flex flex-col items-center font-bold py-2 px-3 rounded border-none  hover:text-title-color-dark  `}>
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
