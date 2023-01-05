import './App.css';

import { useState } from 'react';

import { useFetch } from './hooks/useFecth';

const url = "http://localhost:3000/products";

function App() {

  // const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { data: items, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {

  //   async function fecthData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fecthData();

  // }, []);

  const deleteProduct = async (id) => {
    httpConfig(id, "DELETE")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$: {product.price} <button onClick={() => deleteProduct(product.id)}>Deletar</button></li>

          ))}
        </ul>)}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && (
            <input type="submit" value="aguarde" disabled />
          )}
          {!loading && (
            <input type="submit" value="criar" />
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
