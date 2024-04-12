import React from "react";

export default function Social() {
    return (
        <div className="flex flex-col w-fit text-xl text-gray-500 ">
            <a
                href="https://github.com/Hesham749"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bx bxl-github  text-xl hover:text-title-color-dark"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/hesham-elsayed-5034ba179/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bx bxl-linkedin-square text-xl hover:text-title-color-dark"></i>
            </a>
            <a
                href="https://www.instagram.com/hesham_elsayeed/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bx bxl-instagram-alt text-xl hover:text-title-color-dark"></i>
            </a>
        </div>
    );
}
