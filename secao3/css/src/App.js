import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de componente - ele pode "vazar" */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>

      {/* CSS inline */}
      <p style={{ color: "blue", background: "green", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado inline
      </p>

      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? ({color: 'magenta'}) : ({color: 'pink'})}>CSS dinamico</h2>
      <h2 style={n > 10 ? ({color: 'magenta'}) : ({color: 'pink'})}>CSS dinamico</h2>

      {/* CSS classe dinamico */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse titulo possui classe dinamica</h2>

      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;
