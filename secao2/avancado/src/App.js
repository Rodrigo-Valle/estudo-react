import './App.css';

import Paisagem from "./assets/paisagem-assets.jpg"
import ListRender from './components/ListRender';
import ManageState from './components/ManageState';

function App() {
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
    </div>
  );
}

export default App;
