import Pallettes from "./seedColors.js";
// import "./App.css";
import Pallette from "./Pallette";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(Pallettes[2]));
  return (
    <div className="App">
      <Pallette pallette={generatePalette(Pallettes[2])} />
    </div>
  );
}

export default App;
