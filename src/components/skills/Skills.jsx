import React from "react";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
    },
    {
      name: "Bootstrap",
      level: "Intermediate",
    },
    {
      name: "CSS",
      level: "Advanced",
    },
    {
      name: "Tailwind",
      level: "Intermediate",
    },
    {
      name: "Git",
      level: "Intermediate",
    },
    {
      name: "Github",
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      name: "JQuery",
      level: "Intermediate",
    },

    {
      name: "React",
      level: "Intermediate",
    },
    {
      name: "Redux",
      level: "Intermediate",
    },
  ];
  return (
    <section className="mb-40 pt-16 px- md:px-0 mx-3 md:mx-0" id="skills">
      <h2 className="text-center text-title-color-dark text-3xl font-semibold">
        Skills
      </h2>
      <span className="block text-center text-title-color font-thin  text-xs/none mb-20">
        My technical level
      </span>
      <div className="bg-white  justify-self-center md:w-fit mx-auto border border-gray-200 rounded-xl">
        <h3 className=" text-title-color text-center mt-10 font-semibold">
          Frontend developer
        </h3>
        <div className="grid gap-x-5  mx-2 sm:gap-x-20 sm:mx-14 gap-y-10 grid-cols-2 md:gap-x-20 my-10  md:mx-20 ">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex  flex-col justify-self-start even:justify-self-end items-start ">
              <div className="flex flex-row gap-2 items-center  ">
                <i className="bx bx-badge-check"></i>

                <h3 className=" text-title-color-dark  font-semibold">
                  {skill.name}
                </h3>
              </div>
              <span className=" text-title-color font-thin ps-6 text-xs/none ">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
