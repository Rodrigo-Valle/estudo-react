import { useState } from 'react';

const ConditionalRender = () => {

  const [x] = useState(false);

  const [name, setName] = useState("Rodri")
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {!x && <p>agora x é false</p>}
      <h1>If ternário</h1>
      {name === "Rodrigo" ? (
        <div>
          <p>O nome é Rodrigo</p>
        </div>
      ) : (
        <div>
          <p>O nome não é Rodrigo</p>
        </div>
      )}

      <button onClick={() => setName("Rodrigo")}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;  