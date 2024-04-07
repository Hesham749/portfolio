import React from "react";
import { projects } from "./Data";

export default function Portfolio() {
  return (
    <section className="mb-40 pt-16 px-5 md:px-0" id="portfolio">
      <h2 className="text-center text-title-color-dark text-3xl font-semibold">
        My Portfolio
      </h2>
      <span className="block text-center text-title-color font-thin  text-xs/none mb-20">
        Recent Works
      </span>
      <div className="justify-self-center flex justify-center xl:mx-10 2xl:mx-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ image, id, title, demo, github }) => (
            <div
              key={id}
              className="bg-white px-6 py-6 rounded-lg border hover:translate-y-[-10px] transition-all duration-300  border-gray-200 shadow-lg  flex flex-col items-start justify-center gap-3">
              <img
                src={image}
                alt=""
                className="w-full rounded-lg border border-gray-200"
              />
              <h3 className="text-title-color-dark text-lg font-semibold">
                {title}
              </h3>
              <div className="w-full flex  justify-between ">
                <a
                  href={demo}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex gap-2  items-center  text-title-color group hover:text-title-color-dark">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt  group-hover:translate-x-2 group-hover:text-title-color-dark transition-all duration-300"></i>
                </a>
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex gap-2   items-center  text-title-color group hover:text-title-color-dark">
                  Code{" "}
                  <i className="bx bx-right-arrow-alt  group-hover:translate-x-2 group-hover:text-title-color-dark transition-all duration-300"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
