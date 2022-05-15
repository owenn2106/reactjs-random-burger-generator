import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Header = () => {
  return (
    <div className="header">
      <Title style={{ margin: "0.5em 0" }}>
        Burgers From All Around the World!
      </Title>
    </div>
  );
};

export default Header;
