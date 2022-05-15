import React, { useState, useEffect } from "react";
import { Typography, Skeleton } from "antd";

const { Title } = Typography;

const Burger = ({ chosen }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (chosen) {
      fetchImage();
    }
  }, [chosen]);

  const fetchImage = () => {
    fetch("https://foodish-api.herokuapp.com/api/images/burger/")
      .then((response) => response.json())
      .then((image) => {
        setImage(image.image);
        setLoading(false);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title>{chosen.name}</Title>
      <div style={{ maxWidth: "30px" }}>
        {loading ? <Skeleton.Image active /> : <img src={image} alt="burger" />}
      </div>
    </div>
  );
};

export default Burger;
