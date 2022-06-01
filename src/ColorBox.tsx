import React, { FC, useState } from "react";
import { Color } from "./Pallette";
import "./ColorBox.css";

interface BoxProps {
  color: Color;
}

export const ColorBox: FC<BoxProps> = (props) => {
  const [copied, setCopied] = useState(false);
  const [counter, setCounter] = useState(0);
  function copyToClipboard() {
    navigator.clipboard.writeText(props.color.hex.toString());
    console.log(`copied ${props.color.hex}`);
    if (!copied) {
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 1200);
  }
  function closeOverlay() {
    let newStatus = false;
    setCopied(newStatus);
    let newCounter = counter + 1;

    setCounter(newCounter);
    console.log(copied);
  }
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: `${props.color.hex}` }}
      onClick={(e) => copyToClipboard()}
    >
      <div
        className={`copy-overlay ${copied ? "show" : ""} `}
        style={{ background: props.color.hex.toString() }}
        onClick={(e) => closeOverlay()}
      ></div>
      <div className={`copy-msg ${copied ? "show" : ""}`}>
        <div className="copy-text-notification">COPIED!</div>
        <div className="copy-color-text">{props.color.hex}</div>
      </div>{" "}
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
