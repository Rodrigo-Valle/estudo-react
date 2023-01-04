import React from 'react';

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissao: {profissao}</li>
        {idade < 18 ? (<p> Não pode dirigir</p>) : (<p>Pode dirigir</p>)}
      </ul>
    </div>
  );
};

export default UserDetails;