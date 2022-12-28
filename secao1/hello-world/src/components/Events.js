const Events = () => {

  const handleMyEvent = () => {
    console.log("Clicou no botão");
  };

  const renderSomething = (something) => {
    if(something) {
      return <h1>Renderizando isso</h1>
    } else {
      return <h1>Renderizando outra coisa</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => {console.log("Clicou tambem")}}>Clique aqui também!</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );

};

export default Events;