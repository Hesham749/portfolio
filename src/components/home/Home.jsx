import React from "react";
import Social from "./Social";
import HomeContent from "./HomeContent";
import Image from "./Image";
import Scroll from "./Scroll";
export default function Home() {
  return (
    <main>
      <section id="home " className="container mt-20 mb-40 ">
        <div className="flex md:items-center md:gap-4 px-5 md:px-0 ">
          <Social />
          <div className="flex items-center  md:justify-between justify-center  md:flex-row flex-col gap-10">
            <HomeContent />
            <Image />
          </div>
        </div>
        <Scroll />
      </section>
    </main>
  );
}
