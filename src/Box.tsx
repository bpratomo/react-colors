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
      <div className="copy-container">
        <div className="box-content">
          <span>{props.color.name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
};
