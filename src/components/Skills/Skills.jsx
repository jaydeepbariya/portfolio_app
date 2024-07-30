import React from "react";
import SkillsCard from "./SkillsCard";
import {skillsArray} from '../../data/skills';

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-between items-center gap-x-8 pb-12" id="skills">
      
      <div className="w-full flex flex-col pt-4 pb-2 items-center">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="h-[2px] w-1/5 my-4 bg-blue-500"></div>
      </div>

      <div className="w-11/12 my-24 grid grid-rows-2 grid-cols-2 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
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
