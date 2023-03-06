import colorNames from "colornames";

const SearchInput = ({
  colorValue,
  setColorValue,
  setHexValue,
  // isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* we'll handle the submition with an anonymous function that receives an event object */}
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      {/* <button type="button" onClick={() => setIsDarkText(!isDarkText)}> */}
      <button type="button" onClick={() => setIsDarkText((prev)=>!prev)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default SearchInput;
