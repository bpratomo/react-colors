import Colors from "./seedColors.js";
import "./App.css";
import Pallette from "./Pallette";

function App() {
  return (
    <div className="App">
      <Pallette pallette={Colors[0]} />
    </div>
  );
}

export default App;
