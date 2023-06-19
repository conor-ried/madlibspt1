import React, { useState } from "react";

function MadLibs({ addLibs }) {
  const [lib, setLib] = useState({
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleChange = (e) => {
    setLib({ ...lib, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLibs({
      id: Date.now(),
      noun1: lib.noun1,
      noun2: lib.noun2,
      adjective: lib.adjective,
      color: lib.color,
    });
    setLib({
      noun1: "",
      noun2: "",
      adjective: "",
      color: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Noun 1"
        name="noun1"
        value={lib.noun1}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Noun 2"
        name="noun2"
        value={lib.noun2}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Adjective"
        name="adjective"
        value={lib.adjective}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Color"
        name="color"
        value={lib.color}
        onChange={handleChange}
      />
      <button>Get Story</button>
    </form>
  );
}

export default MadLibs;