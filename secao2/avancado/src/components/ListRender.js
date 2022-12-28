import { useState } from 'react';

const ListRender = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Maggie"
    },
    {
      id: 2,
      name: "Branquinho"
    },
    {
      id: 3,
      name: "Cindy"
    },
    {
      id: 4,
      name: "Bella"
    },
    {
      id: 5,
      name: "Cirila"
    },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.ceil(Math.random() * 6);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  };

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
    </div>
  );
};

export default ListRender;