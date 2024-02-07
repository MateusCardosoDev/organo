import Banner from './components/Banner/index.jsx'
import CampoTexto from './components/index.jsx'

function App() {

  return (
    <div className='App'>
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  )
}

export default App
