import chroma from "chroma-js";

let colors = [
  { name: "red", color: "#F44336" },
  { name: "pink", color: "#E91E63" },
  { name: "purple", color: "#9C27B0" },
  { name: "deeppurple", color: "#673AB7" },
  { name: "indigo", color: "#3F51B5" },
  { name: "blue", color: "#2196F3" },
  { name: "lightblue", color: "#03A9F4" },
  { name: "cyan", color: "#00BCD4" },
  { name: "teal", color: "#009688" },
  { name: "green", color: "#4CAF50" },
  { name: "lightgreen", color: "#8BC34A" },
  { name: "lime", color: "#CDDC39" },
  { name: "yellow", color: "#FFEB3B" },
  { name: "amber", color: "#FFC107" },
  { name: "orange", color: "#FF9800" },
  { name: "deeporange", color: "#FF5722" },
  { name: "brown", color: "#795548" },
  { name: "grey", color: "#9E9E9E" },
  { name: "bluegrey", color: "#607D8B" },
];

let levels = [...Array(10).keys()].map((n) => (n === 0 ? 50 : n * 100));
function getRange(hexColor) {
  let end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColor) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColor);
}

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  // generate levels
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  //add the color in

  for (let color of starterPalette.colors) {
    let colorScale = getScale(color.color, 10).reverse();
    for (let s in colorScale) {
      newPalette.colors[levels[s]].push({
        name: `${color.name} ${levels[s]}`,
        id: color.name.replace(/ /g, "-"),
        hex: colorScale[s],
        rgb: chroma(colorScale[s]).css(),
      });
    }
  }

  return newPalette;
}

export { generatePalette };
