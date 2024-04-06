import React from "react";
import infosysLogo from "../../assets/infosys.png";

export const Experience = () => {
  return (
    <div className="w-full min-h-max flex flex-col justify-between items-center gap-x-8" id="experience" >
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="h-[2px] w-1/5 my-4 bg-blue-500"></div>
        <p className="text-md my-3">
          My work experience as a software developement engineer in past 2 years
        </p>
      </div>

      <div className="w-full my-4 flex flex-col justify-center items-center">
        <div className="w-2/5 flex flex-col items-center my-3 outline outline-[1px] outline-blue-500 rounded-md hover:outline-[2px] p-4 group hover:scale-105 hover:shadow-blue-500 hover:shadow-md transition-all duration-200 max-md:w-full">
          <img
            src={infosysLogo}
            alt="company logo"
            width={80}
            height={80}
            className="my-4 rounded-md outline px-4 py-2 outline-[2px] outline-blue-500 group-hover:scale-105 transition-all duration-200"
          />
          <div>
            <p className="font-semibold">Infosys Limited | Systems Engineer </p>
            <p>Pune | Feb,2022 - Current </p>
          </div>
          <ul className="list-none text-sm text-center p-4">
            <li className="my-2">
              Led the development and maintenance of enhancements in web
              applications for a leading banking client, utilizing modern
              technologies such as React, Java 8, Spring Boot and SQL.
            </li>
            <li className="my-2">
              Managed the entire Agile software development life cycle,
              including requirements gathering, solution development and
              deployment.
            </li>
            <li className="my-2">
              Actively engaged in ongoing learning and skill development by
              participating in internal projects, gaining exposure to trending
              technologies like MERN Stack, DevOps and AWS.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
