import React, { useState } from "react";
import { groups } from "../../data/projects";
import { projects } from "../../data/projects";

const Projects = () => {
  const [activeGroup, setActiveGroup] = useState(groups[0]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-x-8 pb-12" id="projects">
      <div className="w-full flex flex-col pt-4 pb-2 items-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="h-[2px] w-1/5 my-4 bg-blue-500"></div>
        <p className="text-md my-3">
          Here are some of my projects on which I have been working on for my
          skill enhancement and practice
        </p>
      </div>

      <div className="w-full py-6 flex flex-col justify-center items-center">
        <div className="mx-auto my-3">
          {groups.map((groupName, index) => (
            <button
              key={index}
              onClick={() => setActiveGroup(groupName)}
              className={`mx-3 px-2 py-1 rounded-md outline outline-[1px] outline-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 ${groupName === activeGroup ? "bg-blue-500 text-white outline-none" : "" }`}
            >
              {groupName}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {projects.map((projectGroup, index) => {
            return (
              <div key={index} >
                {projectGroup.group === activeGroup ? (
                  <div className="flex justify-center items-center gap-4">
                    {projectGroup.projects.map((project, index) => {
                      return (
                        <div key={index} className="max-w-[350px] flex flex-col justify-center items-start gap-4 outline outline-[1px] rounded-md hover:shadow-md hover:shadow-blue-500 hover:scale-105 duration-200 transition-all">
                          <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            className="aspect-11/6 rounded-md grayscale hover:grayscale-0 transition-all duration-200"
                          />
                          <div className="flex flex-wrap gap-x-3 gap-y-2 ml-2 my-2">
                            {project?.skills?.map((skill, index) => (
                              <div
                                key={index}
                                className={`text-sm px-2 py-1 outline outline-[1px] rounded-md hover:shadow-md hover:outline-[2px]`}
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          <p className="text-xl font-semibold text-blue-500 text-center">
                            {project.name}
                          </p>
                          <div className="w-full flex justify-center my-3 items-center gap-3">
                            <button className="px-2 py-1 rounded-md outline outline-[1px] outline-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                              <a href={project.visitLink} target="_blank" rel="noreferrer" >
                                Visit
                              </a>
                            </button>
                            <button className="px-2 py-1 rounded-md outline outline-[1px] outline-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                              <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
                                Source Code
                              </a>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
