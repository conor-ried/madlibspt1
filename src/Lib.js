import React from "react";

const Lib = ({ id, noun1, noun2, adjective, color, removeBox }) => {
  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div>
      <p>
        There was a {color} {noun1} who loved a {adjective} {noun2}.
      </p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Lib;