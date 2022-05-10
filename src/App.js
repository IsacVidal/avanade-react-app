import Header from './components/Header';
import './App.css';



function App() {

  const dados = {
    nome: "Isac Terrenas Vidal",
    empresa: "Google",
    site: "https://www.google.com.br",
    className: "App-link",
  };

  return (
    // JSX - JavaScript Extensible
    // fragmento react, garantir que está retornando um elemento raíz. <>  </>
    <div className="App">
      <Header title="Bem Vindo!" options={dados}/>
    </div>
  );
}

export default App;
