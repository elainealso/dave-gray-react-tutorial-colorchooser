import Square from "./Square";
import SearchInput from "./SearchInput";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  //[currentState, updaterFunction] = useState(initialState)
  return (
    <div className="App">
      <Square colorValue={colorValue} />
      <SearchInput colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
