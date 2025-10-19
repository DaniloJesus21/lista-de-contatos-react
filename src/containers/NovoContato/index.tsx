import { type FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import * as enums from "../../utils/enums/Contato";

import { cadastrar } from "../../store/reducers/contatos";
import { validaSalvamento } from "../../utils/validacoes/validacoes";

const NovoContato = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [categoria, setCategoria] = useState(enums.Categoria.FAMILIA);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const contatoParaAdicionar = {
      nome,
      categoria,
      telefone,
      email,
    };

    if (!validaSalvamento(telefone, email)) {
      return;
    }

    dispatch(cadastrar(contatoParaAdicionar));
    navigate("/");
  };

  return (
    <S.MainContainer>
      <S.Titulo>Novo Contato</S.Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <S.CampoCadastro
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <S.CampoTelefone
          mask="(00) 00000-0000"
          value={telefone}
          onAccept={(value: string) => setTelefone(value)}
          placeholder="Telefone - (DD)XXXXX-XXXX"
          className="campo-cadastro"
          required
        />

        <S.CampoCadastro
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email - exemplo@email.com.br"
          required
        />

        <S.ContainerRadio>
          <p>Categoria:</p>
          {Object.values(enums.Categoria)
            .filter((categoria) => categoria !== enums.Categoria.TODOS)
            .map((categoria) => (
              <div key={categoria}>
                <input
                  value={categoria}
                  name="categoria"
                  type="radio"
                  id={categoria}
                  defaultChecked={categoria === enums.Categoria.FAMILIA}
                  onChange={(evento) =>
                    setCategoria(evento.target.value as enums.Categoria)
                  }
                  required
                />
                <label htmlFor={categoria}>{categoria}</label>
              </div>
            ))}
        </S.ContainerRadio>

        <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
      </S.Form>
    </S.MainContainer>
  );
};

export default NovoContato;
