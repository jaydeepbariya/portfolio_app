import React from "react";
import { TypeAnimation } from 'react-type-animation';


const TypeAnimationRole = () => {
  return (
    <div className="my-4">
      <div>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "I am a MERN Stack Developer", 
            1000,
            "I am a Front End Developer",
            1000,
            "I am a Backend Developer",
            1000,
            "I am a Software Developer",
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
