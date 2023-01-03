import React, { useState } from 'react';
import "./MyForm.css";

const MyForm = ({ user }) => {

  // gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);


    /* limpar form */
    setName('');
    setEmail('');
    setBio('');
    setRole('');
  };

  return (
    <div>
      {/* Envio de formulario */}
      <form onSubmit={handleSubmit}>
        {/* form padrão */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder='digite seu nome' onChange={handleName} value={name} />
        </div>
        {/* Label envolvendo input */}
        <label >
          <span>E-mail
            <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </span>
        </label>
        <label >
          <span>Bio:</span>
          <textarea name="bio" placeholder='descricao usuario' onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
        </label>
        <label>
          <span>Funcao no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;