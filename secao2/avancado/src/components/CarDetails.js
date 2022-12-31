import React from 'react';

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Esse carro é novo</p> }
    </div>
  );
};

export default CarDetails;