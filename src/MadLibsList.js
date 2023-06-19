import React, { useState } from "react";
import MadLibs from "./MadLibs";
import Lib from "./Lib";

const MadLibsList = () => {
  const INITIAL_LIBS = [
    {
      id: 1,
      noun1: "cat",
      noun2: "dog",
      adjective: "happy",
      color: "red",
    },
    {
      id: 2,
      noun1: "tree",
      noun2: "flower",
      adjective: "beautiful",
      color: "blue",
    },
  ];
  const [libs, setLibs] = useState(INITIAL_LIBS);

  const addLibs = (lib) => {
    setLibs([...libs, lib]);
  };

  const removeLibs = (id) => {
    setLibs(libs.filter((lib) => lib.id !== id));
  };

  return (
    <div>
      <MadLibs addLibs={addLibs} />
      {libs.map((lib) => (
        <Lib key={lib.id} {...lib} removeBox={removeLibs} />
      ))}
    </div>
  );
};

export default MadLibsList;


