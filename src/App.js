import Square from "./Square";
import SearchInput from "./SearchInput";
import { useState } from "react";

function App() {
  //[currentState, updaterFunction] = useState(initialState)
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <SearchInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        // isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
