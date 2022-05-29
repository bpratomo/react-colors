import React, { FC } from "react";
import { Box } from "./Box";
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
    <div>
      {props.pallette.paletteName}
      <div>
        {props.pallette.colors.map((c) => (
          <Box color={c} />
        ))}
      </div>
    </div>
  );
};

export default Pallette;
