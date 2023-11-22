import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
  const nome = "Herbert";

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Vinícius" />
      <SayMyName nome="Danilo" />
      <SayMyName nome={nome} />
    </div>
  );
}

export default App;
