import React from "react";
import { TypeAnimation } from 'react-type-animation';


const TypeAnimationRole = () => {
  return (
    <div className="my-4 mx-auto">
      <div>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "MERN Stack Developer", 
            1000,
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Software Developer",
            1000,
            "Java Backend Developer",
            1000,
            "Java Full Stack Developer",
            500,
          ]}
          speed={50}
          style={{ fontSize: "1.5rem", fontWeight:"bold" }}
          repeat={Infinity}
          className="text-sky-500"
        />
      </div>
    </div>
  );
};

export default TypeAnimationRole;
