const Challenge = () => {
  const valorA = 10;
  const valorB = 5;

  const imprimeValorA = () => {
    return <h1>{valorA}</h1>;
  };

  const imprimeValorB = () => {
    return <h1>{valorB}</h1>;
  };

  const somaOsValores = () => {
    return console.log(valorA + valorB);
  };

  return (
    <div>
      {imprimeValorA()}
      {imprimeValorB()}

      <button onClick={somaOsValores}>Some os valores</button>
    </div>
  );
};

export default Challenge;