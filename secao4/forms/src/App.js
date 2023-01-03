import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
      <MyForm user={{ name: "Rodrigo", email: "rodrigo@email.com" }} />
    </div>
  );
}

export default App;
