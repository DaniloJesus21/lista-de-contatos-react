import { useDispatch, useSelector } from "react-redux";

import FiltroCard from "../../components/FiltroCard/FiltroCard";

import * as S from "./styles";
import type { RootReducer } from "../../store";
import { Campo } from "../../styles";
import { alterarTermo } from "../../store/reducers/filtro";
import * as enums from "../../utils/enums/Contato";
import { Link } from "react-router-dom";

type Props = {
  mostrarFiltro: boolean;
};

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);
  const { itens: contatosItens } = useSelector(
    (state: RootReducer) => state.contatos
  );

  const getContadorPorCategoria = (
    categoria: "Família" | "Amigos" | "Trabalho" | "Todos"
  ) => {
    if (categoria === "Todos") {
      return contatosItens.length;
    } else {
      return contatosItens.filter((item) => item.categoria === categoria)
        .length;
    }
  };

  return (
    <S.Aside>
      {mostrarFiltro ? (
        <>
          <div>
            <Campo
              type="text"
              placeholder="Buscar..."
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
          </div>
          <S.Filtros>
            <FiltroCard
              src={"/todos.png"}
              alt={"icone-trabalho"}
              titulo={"Todos"}
              criterio={"todos"}
              valor="Todos"
              contador={getContadorPorCategoria("Todos")}
            />
            <FiltroCard
              src={"/trabalho.png"}
              alt={"icone-trabalho"}
              titulo={"Trabalho"}
              criterio={"categoria"}
              valor={enums.Categoria.TRABALHO}
              contador={getContadorPorCategoria("Trabalho")}
            />
            <FiltroCard
              src={"/familia.png"}
              alt={"icone-familia"}
              titulo={"Familia"}
              criterio={"categoria"}
              valor={enums.Categoria.FAMILIA}
              contador={getContadorPorCategoria("Família")}
            />
            <FiltroCard
              src={"/amigos.png"}
              alt={"icone-amigos"}
              titulo={"Amigos"}
              criterio={"categoria"}
              valor={enums.Categoria.AMIGOS}
              contador={getContadorPorCategoria("Amigos")}
            />
          </S.Filtros>
        </>
      ) : (
        <Link to="/">
          <S.BotaoVoltar type="button">Voltar</S.BotaoVoltar>
        </Link>
      )}
    </S.Aside>
  );
};

export default BarraLateral;
