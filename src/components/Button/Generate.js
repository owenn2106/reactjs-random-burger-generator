import React from "react";
import { Button } from "antd";
import { randomInt } from "../../utility";

const Generate = ({ burgers, setChosen }) => {
  const handleClick = () => {
    setChosen(burgers[randomInt(0, burgers.length - 1)]);
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Generate
    </Button>
  );
};

export default Generate;
