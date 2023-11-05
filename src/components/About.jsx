import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual URL of your resume file.
    const resumeUrl =
      "https://drive.google.com/file/d/1AvPKXmJT3ZKNN5FuhaVC9YmsBv4GtIU0/view?usp=sharing";
    // Create an invisible link and trigger a click event to start the download.
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    link.download = "SoumikSenResume.pdf"; // Optional: set the downloaded file's name.
    link.click();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Interested in the role of a Software Engineer where I can contribute
          my analytical skills and knowledge acquired by pursuing Computer
          Science & Engineering with specialization in Data Science. Looking for
          a dynamic and progressive company where my skills are utilized in the
          maximum way possible.
        </p>
        <a
          href="mailto:mastersoumik2003@gmail.com"
          className="block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          mastersoumik2003@gmail.com
        </a>
        <div className="flex flex-col ">
          <button
            type="button"
            className="w-5/12 mt-5  text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900  dark: bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            <a className="button" onClick={handleDownload}>
              Download Resume
            </a>
          </button>
          <button
            type="button"
            className="w-4/12 mt-5  text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-gray-900  dark: bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            <a
              className="button"
              href="https://github.com/SoumikSen10"
              target="_blank"
            >
              GitHub
            </a>
          </button>
          <button
            type="button"
            className="w-4/12 mt-5  text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900  dark: bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <a
              className="button"
              href="https://www.linkedin.com/in/soumik-sen-210473211/"
              target="_blank"
            >
              Linkedin
            </a>
          </button>
        </div>
      </div>
      <img
        src="/Images/coder_new.gif"
        alt="Soumik Sen"
        className="w-full md:w-6/12 rounded-lg "
      />
    </div>
  );
};

export default About;
