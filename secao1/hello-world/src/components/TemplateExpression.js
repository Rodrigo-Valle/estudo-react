const TemplateExpression = () => {

  const people = {
    name: "Rodrigo",
    job: "programador"
  };

  return (
    <div>
      <h1>Olá {people.name}, Bem Vindo!</h1>
      <p>Você é um {people.job}</p>
    </div>
  );

};

export default TemplateExpression;