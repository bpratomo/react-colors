import React, { FC } from "react";
import { ColorBox } from "./Box";
import "./Pallette.css";
export interface Color {
  name: String;
  color: String;
}

interface PalletteProps {
  pallette: Pallette;
}

interface Pallette {
  paletteName: String;
  id: String;
  emoji: String;
  colors: Color[];
}

const Pallette: FC<PalletteProps> = (props) => {
  return (
    <div className="Pallette">
      <div className="Pallette-Colors">
        {props.pallette.colors.map((c) => (
          <ColorBox color={c} />
        ))}
      </div>
    </div>
  );
};

export default Pallette;
