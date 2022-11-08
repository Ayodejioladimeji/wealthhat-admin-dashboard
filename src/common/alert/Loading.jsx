import React from "react";
import { Oval } from "react-loader-spinner";
import "./loading.css";

const Loading = ({ height, width, color }) => {
  return <Oval color={color} height={height} width={width} />;
};

export default Loading;
