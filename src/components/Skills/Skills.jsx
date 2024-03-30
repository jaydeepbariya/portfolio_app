import React from "react";
import SkillsCard from "./SkillsCard";
import {skillsArray} from '../../data/skills';

const Skills = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center gap-x-8 pb-12" id="skills">
      <div className="w-full flex flex-col pt-4 pb-2 items-center">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="h-[2px] w-1/5 my-4 bg-blue-500"></div>
        <p className="text-md my-3">
          Here are some of my skills on which I have been working on for the
          past 2 years
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-6">
          {
            skillsArray.map((skillData, index) => {
              return (<SkillsCard skillData={skillData} key={index} />);
            })
          }
      </div>

    </div>
  );
};

export default Skills;
