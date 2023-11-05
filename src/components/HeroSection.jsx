import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-wrap items-center">
      <div id="hero" className="flex items-left justify-center flex-col py-20">
        <div className="text-left">
          <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
            Hii, I'm Soumik
          </h1>
          <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
            currently a CSE(Data Science) undergraduate with a passion for
            full-stack web development. Explore my projects showcasing the
            fusion of data insights and web applications. Let's connect and
            explore the possibilities together.
          </p>
          <a
            href="#works"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
          >
            See Works
          </a>
        </div>
      </div>
      <div
        id="giffy"
        className=" flex items-right justify-center flex-col ml-10  w-6/12 xs:w-12/12 sm:items-center"
      >
        <img
          src="https://media.tenor.com/YZPnGuPeZv8AAAAd/coding.gif"
          alt="Coder GIF"
        />
      </div>
    </div>
  );
}

export default HeroSection;
