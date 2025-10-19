import BarraLateral from "../../containers/BarraLateral/BarraLateral";
import NovoContato from "../../containers/NovoContato";

const Cadastro = () => {
  return (
    <>
      <BarraLateral mostrarFiltro={false} />
      <NovoContato />
    </>
  );
};

export default Cadastro;
