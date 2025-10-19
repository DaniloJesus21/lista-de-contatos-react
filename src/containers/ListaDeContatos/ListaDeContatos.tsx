import { useSelector } from "react-redux";

import * as S from "./styles";
import ContatoCard from "../../components/ContatoCard/ContatoCard";
import Footer from "../../components/Footer/Footer";

import { type RootReducer } from "../../store";

import * as enums from "../../utils/enums/Contato";

const ListaDeContatos = () => {
  const { itens: contatosItens } = useSelector(
    (state: RootReducer) => state.contatos
  );
  const { termo, valor, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraContatos = () => {
    let contatosFiltrados = [...contatosItens];

    if (valor !== enums.Categoria.TODOS) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.categoria === valor
      );
    }

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (contato) =>
          contato.nome.toLowerCase().includes(termo.toLowerCase()) ||
          contato.telefone.includes(termo) ||
          contato.email.toLowerCase().includes(termo.toLowerCase())
      );
    }

    return contatosFiltrados.sort((a, b) => {
      return a.nome.localeCompare(b.nome);
    });
  };

  const exibirContatos = filtraContatos();

  return (
    <S.Main>
      <S.Titulo>Contatos</S.Titulo>
      <span>
        {termo ? `Filtro por nome: "${termo}"` : ""}
        {criterio === "categoria" && valor !== "Todos"
          ? ` Filtro por categoria: ${valor}`
          : ""}
      </span>{" "}
      <br />
      <S.Conteudo>
        {exibirContatos.map((contato) => (
          <li key={contato.id}>
            <ContatoCard
              id={contato.id}
              nome={contato.nome}
              telefone={contato.telefone}
              email={contato.email}
              categoria={contato.categoria}
            />
          </li>
        ))}
      </S.Conteudo>
      <Footer />
    </S.Main>
  );
};

export default ListaDeContatos;
