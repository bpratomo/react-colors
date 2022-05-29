import Pallettes from "./seedColors.js";
import "./App.css";
import Pallette from "./Pallette";

function App() {
  return (
    <div className="App">
      <Pallette pallette={Pallettes[2]} />
    </div>
  );
}

export default App;
