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
      </div>

      <div className="w-full py-6 flex flex-col justify-center items-center">
        <div className="mx-auto my-3 max-md:flex max-md:flex-col max-md:gap-4">
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
                  <div className="flex justify-center items-center gap-4 max-md:flex-col max-md:gap-y-8">
                    {projectGroup.projects.map((project, index) => {
                      return (
                        <div key={index} className="max-w-[300px] flex flex-col justify-center items-start gap-4 outline outline-[1px] rounded-md hover:shadow-md hover:shadow-blue-500 hover:scale-105 duration-200 transition-all">
                          <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            className="aspect-11/6 rounded-md grayscale hover:grayscale-0 transition-all duration-200"
                          />
                          <div className="flex flex-wrap gap-3 mx-auto">
                            {project?.skills?.map((skill, index) => (
                              <div
                                key={index}
                                className={`text-[0.75rem] px-2 py-1 outline outline-[1px] rounded-md hover:shadow-[3px] hover:outline-[1.5px]`}
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          <p className="text-[1.25rem] font-semibold text-blue-500 mx-auto">
                            {project.name}
                          </p>
                          <div className="w-full flex justify-center my-3 items-center gap-3">
                            <button className="px-2 py-1 rounded-md outline outline-[1px] outline-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                              <a href={project.visitLink} target="_blank" rel="noreferrer" >
                                Visit
                              </a>
                            </button>
                            <button className="px-2 py-1 rounded-md outline outline-[1px] outline-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-200">
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
