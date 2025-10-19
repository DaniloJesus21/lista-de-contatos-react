import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { alterarFiltro } from "../../store/reducers/filtro";
import { type RootReducer } from "../../store";

export type Props = {
  src?: string;
  alt?: string;
  titulo: string;
  valor: "Todos" | "Trabalho" | "Família" | "Amigos";
  criterio: "categoria" | "todos";
  contador: number;
};

const FiltroCard = ({ src, alt, titulo, valor, criterio, contador }: Props) => {
  const dispatch = useDispatch();
  const filtro = useSelector((state: RootReducer) => state.filtro);

  const verificaEstaAtivo = () => {
    const mesmoValor = filtro.valor === valor;
    const mesmoCriterio = filtro.criterio === criterio;

    return mesmoCriterio && mesmoValor;
  };

  const ativo = verificaEstaAtivo();

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio: criterio,
        valor: valor,
      })
    );
  };

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Icone>
        <img src={src} alt={alt} />
      </S.Icone>
      <S.Label>{titulo}</S.Label>
      <S.Contador>{contador}</S.Contador>
    </S.Card>
  );
};

export default FiltroCard;
