import './App.css';

import Paisagem from "./assets/paisagem-assets.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageState from './components/ManageState';
import ShowUserName from './components/ShowUserName';

import { useState } from 'react';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';

function App() {
  const pessoas = [{
    id: 1,
    nome: "Rodrigo",
    profissao: "Programador",
    idade: 31
  }, {
    id: 2,
    nome: "Paloma",
    profissao: "PetSitter",
    idade: 27
  }, {
    id: 3,
    nome: "Lucilene",
    profissao: "Cuidadora",
    idade: 62
  }, {
    id: 4,
    nome: "Catarina",
    profissao: "Estudante",
    idade: 15
  }]

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const km = 100;
  const [brand] = useState("Toyota");

  const cars = [
    {
      id: 1,
      brand: "Toyota",
      color: "azul",
      km: 0,
      newCar: true
    },
    {
      id: 2,
      brand: "VW",
      color: "preto",
      km: 25000,
      newCar: false
    },
    {
      id: 3,
      brand: "Ferrari",
      color: "vermelho",
      km: 0,
      newCar: true
    }
  ];

  return (
    <div className="App">
      <h1>Avancando em React</h1>
      <div>
        <img src="/paisagem-public.jpg" alt="Paisagem public" />
      </div>
      <div>
        <img src={Paisagem} alt="Paisagem assets" />
      </div>
      <ManageState />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Rodrigo" />
      {/* destructuring */}
      <CarDetails color="verde" km={km} brand={brand} newCar={true} />
      {/* reaproveitamento */}
      <CarDetails color="azul" km={80000} brand={"Nissan"} newCar={false} />
      <CarDetails color="cinza" km={0} brand={"Fiat"} newCar={true} />

      {cars.map((car) => (
        <CarDetails key={car.id} color={car.color} km={car.km} brand={car.brand} newCar={car.newCar} />
      ))}

      {/* fragments */}
      <Fragments />

      {/* children */}
      <Container>
        <p>Coteudo do container</p>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />


      {/* desafio */}
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
      ))}
    </div>
  );
}

export default App;
