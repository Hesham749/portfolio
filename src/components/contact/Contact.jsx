import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm("service_r1epcbh", "template_17cpmqe", form.current, {
        publicKey: "fL3O6ucAThx8H4Nd-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const contactCard = [
    {
      id: 1,
      icon: "bx bx-mail-send",
      title: "Email",
      info: "HeshamElsayedAhmed@outlook.com",
      link: "mailto:HeshamElsayedAhmed@outlook.com",
    },
    {
      id: 2,
      icon: "bx bxl-whatsapp",
      title: "Whatsapp",
      info: "01014607065",
      link: "https://wa.me/+201014607065",
    },
    {
      id: 3,
      icon: "bx bxl-messenger",
      title: "Messenger",
      info: "Hesham ElSayed",
      link: "https://m.me/Hesham0.0elsayed",
    },
  ];
  const formInput = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Insert Your Name",
    },
    {
      id: 2,
      name: "Mail",
      type: "email",
      placeholder: "Insert Your Email",
    },
  ];
  return (
    <section className="mb-40 pt-16 px-5 md:px-0" id="contact">
      <h2 className="text-center text-title-color-dark text-3xl font-semibold">
        Get in touch
      </h2>
      <span className="block text-center text-title-color font-thin  text-xs/none mb-20">
        Contact Me
      </span>
      <div className="flex flex-col mx-4 md:mx-0 md:flex-row justify-center  gap-20  justify-self-center ">
        <div className="flex flex-col gap-5">
          <h3 className="text-title-color-dark font-semibold text-center text-lg ">
            Talk to me
          </h3>
          {contactCard.map(({ id, icon, title, info, link }) => (
            <div
              key={id}
              className="flex flex-col items-center  bg-white border border-gray-200 rounded-xl px-10 py-7">
              <i className={`${icon} text-title-color-dark text-3xl`}></i>

              <h3 className="text-title-color-dark font-semibold">{title}</h3>
              <span className="text-title-color no-underline ">{info}</span>
              <a
                rel="noopener noreferrer"
                href={link}
                target="_blank"
                className="flex gap-2 mt-3 items-center  text-title-color group hover:text-title-color-dark">
                Contact me{" "}
                <i className="bx bx-right-arrow-alt  group-hover:translate-x-2 group-hover:text-title-color-dark transition-all duration-300"></i>
              </a>
            </div>
          ))}
        </div>
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <h3 className="text-title-color-dark font-semibold text-center text-lg">
            Write to me your project
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center md:items-start  gap-20">
            {formInput.map(({ id, name, type, placeholder }) => (
              <div key={id} className="relative  w-full">
                <label className=" text-xs text-title-color absolute top-[-9px] bg-white left-3 z-10">
                  {name}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  className="absolute top-0 ps-4 py-3  bg-body-color focus:border-title-color-dark  border-2 outline-none  border-gray-400   r-box-shadow  rounded-lg p-2 w-full"
                />
              </div>
            ))}

            <div className="relative w-full ">
              <label className=" text-xs text-title-color absolute top-[-9px] bg-white left-3 z-10">
                Project
              </label>
              <textarea
                required
                type={"text"}
                name={"Project"}
                rows={7}
                placeholder={"Write Your Project"}
                className="absolute top-0 bg-body-color ps-4 py-3 r-box-shadow focus:border-title-color-dark \ border-2 border-gray-400 outline-none rounded-lg p-2 w-full"
              />
            </div>
            <button className="flex  mt-36 items-center gap-1 p-3 w-fit rounded-xl outline-none  hover:bg-black text-white  bg-container-color">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#FBFAFB"></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#FBFAFB"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
