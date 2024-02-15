import { useState } from "react";
import Banner from "./components/Banner/index.jsx";
import Formulario from "./components/Formulario/index.jsx";
import Time from "./components/Time/index.jsx";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação" />
      <Time nome="Frontend" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
