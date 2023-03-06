const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;


//perguntar para o Luke: 
//1) de onde estão vindo as cores? é alguma palavra chave no código? --- import colorNames from "colornames";
//2) explicar o que entendi deste cód e perguntar se a razao de square receber somente currentState e SearchInput receber currentState e updaterFunction é realmente o que pensei ou existe uma explicacao mais lógica que me ajude a chegar ao mesmo resultado qdo eu for fazer um cód? Associei ao fato de currState ser só o resultado, eqto a lógica do negócio se refere ao input do user, ou seja, faz mais sentido ser no SearchInput mesmo, mas se for isso, não entendi pq defaultProps fica no Squan --- yes