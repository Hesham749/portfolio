import React from "react";

export default function FOoter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-center mb-14 md:mb-0 py-5 border-t border-gray-200">
      <div className="md:w-fit md:mx-auto justify-self-center flex flex-col gap-5 justify-center items-center ">
        <h3 className="text-title-color-dark text-3xl font-bold">Hesham</h3>
        {/* icons */}
        <div className="flex gap-5 justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hesham749"
            className="text-title-color-dark font-semibold text-3xl  ">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/hesham-elsayed-5034ba179/"
            className="text-title-color-dark font-semibold text-3xl  ">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/hesham_elsayeed/"
            className="text-title-color-dark font-semibold text-3xl  ">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
        {/* links */}
        <div className="flex gap-5 justify-center ">
          <a
            href="#about"
            className="text-title-color hover:text-title-color-dark font-semibold">
            About
          </a>
          <a
            href="#projects"
            className="text-title-color hover:text-title-color-dark font-semibold">
            Projects
          </a>
          <a
            href="#skills"
            className="text-title-color hover:text-title-color-dark font-semibold">
            Skills
          </a>
        </div>

        {/* copyright */}
        <p className="text-title-color text-sm">
          <span className="text-title-color-dark font-semibold">
            Copyright ©
          </span>{" "}
          {year} Hesham. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
