import {useState} from "react"

const ManageState = () => {

  const [number, setNumber] = useState(0)

  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(1)}>Clique aqui</button>
    </div>
  );
};

export default ManageState;
