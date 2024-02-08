import CampoTexto from "..";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2 >Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome..." />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo..." />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem..." />
        <ListaSuspensa itens
      </form>
    </section>
  );
};

export default Formulario;
