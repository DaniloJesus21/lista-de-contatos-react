import { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import { remover, editar } from "../../store/reducers/contatos";
import type Contato from "../../models/Contato";

import { validaSalvamento } from "../../utils/validacoes/validacoes";

type Props = Contato;

const ContatoCard = ({ id, nome, telefone, email, categoria }: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [nomeEditado, setNome] = useState(nome);
  const [telefoneEditado, setTelefone] = useState(telefone);
  const [emailEditado, setEmail] = useState(email);

  function removerContato() {
    dispatch(remover(id));
  }

  function cancelarEdicao() {
    setEstaEditando(false);
    setNome(nome);
    setTelefone(telefone);
    setEmail(email);
  }

  function salvarEdicao() {
    if (!validaSalvamento(telefoneEditado, emailEditado)) {
      return;
    }
    dispatch(
      editar({
        id: id,
        nome: nomeEditado,
        telefone: telefoneEditado,
        email: emailEditado,
      })
    );
    setEstaEditando(false);
  }

  const getIniciais = (nome: string) => {
    if (!nome) return "";

    const partes = nome.trim().split(" ").filter(Boolean);

    if (partes.length === 1) {
      return partes[0][0].toUpperCase();
    }

    return (partes[0][0] + partes[1][0]).toUpperCase();
  };

  return (
    <S.ContatoCard key={id}>
      <S.Header>
        <S.Perfil>
          <S.Avatar>{getIniciais(nome)}</S.Avatar>
          <S.Info>
            <S.Nome
              disabled={!estaEditando}
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <S.Email
              disabled={!estaEditando}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.Tag categoria={categoria}>{categoria}</S.Tag>
          </S.Info>
        </S.Perfil>
      </S.Header>

      <S.Main>
        <S.Telefone
          disabled={!estaEditando}
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </S.Main>

      <S.Actions>
        {estaEditando ? (
          <>
            <S.SaveButton onClick={salvarEdicao}>Salvar</S.SaveButton>
            <S.DeleteButton onClick={cancelarEdicao}>Cancelar</S.DeleteButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setEstaEditando(true)}>
              Editar
            </S.EditButton>
            <S.DeleteButton onClick={removerContato}>Remover</S.DeleteButton>
          </>
        )}
      </S.Actions>
    </S.ContatoCard>
  );
};

export default ContatoCard;
