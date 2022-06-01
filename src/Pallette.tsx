import React, { FC, useState } from "react";
import { ColorBox } from "./ColorBox";
import "./Pallette.css";
export interface Color {
  name: String;
  id: String;
  hex: String;
  rgb: String;
}

interface PalletteProps {
  pallette: Pallette;
}

interface Pallette {
  paletteName: String;
  id: String;
  emoji: String;
  colors: { [index: number]: Color[] };
}

const Pallette: FC<PalletteProps> = (props) => {
  let paletteLevels = Object.keys(props.pallette.colors)
    .filter((s) => parseInt(s) > 50)
    .map((s) => parseInt(s));
  const [level, setLevel] = useState(paletteLevels[1]);

  return (
    <div className="Pallette">
      <input
        type="range"
        id="colorSlider"
        name="colorSlider"
        list="levels"
        value={level}
        onChange={(e) => setLevel(parseInt(e.target.value))}
        max={Math.max(...paletteLevels)}
        min={Math.min(...paletteLevels)}
        step="100"
      ></input>
      <datalist id="levels">
        {paletteLevels.map((l) => (
          <option value={`${l}`} />
        ))}
      </datalist>
      <div className="Pallette-Colors">
        {props.pallette.colors[level].map((c) => (
          <ColorBox color={c} />
        ))}
      </div>
    </div>
  );
};

export default Pallette;
