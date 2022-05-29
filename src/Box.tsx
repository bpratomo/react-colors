import React, { FC } from "react";
import { Color } from "./Pallette";
import "./ColorBox.css";

interface BoxProps {
  color: Color;
}

export const ColorBox: FC<BoxProps> = (props) => {
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: `${props.color.color}` }}
    >
      {props.color.name}
    </div>
  );
};
