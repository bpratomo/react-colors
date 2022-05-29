import React, { FC } from "react";
import { Color } from "./Pallette";

interface BoxProps {
  color: Color;
}

export const Box: FC<BoxProps> = (props) => {
  return <div>{props.color.name}</div>;
};
