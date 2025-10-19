import BotaoAdicionar from "../../components/BotaoAdicionar";
import BarraLateral from "../../containers/BarraLateral/BarraLateral";
import ListaDeContatos from "../../containers/ListaDeContatos/ListaDeContatos";

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltro />
      <ListaDeContatos />
      <BotaoAdicionar />
    </>
  );
};

export default Home;
