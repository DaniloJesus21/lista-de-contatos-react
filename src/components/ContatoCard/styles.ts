import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import * as enums from "../../utils/enums/Contato";

type CategoriaProps = {
  categoria: enums.Categoria;
};

function retornaCorDeFundo(props: CategoriaProps): string {
  if ("categoria" in props) {
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.laranja;
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.amarelo;
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.marrom;
  }
  return variaveis.bege;
}

export const ContatoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: all 0.2s ease;
  max-height: 230px;
  height: 100%;
  max-width: 400px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  border-radius: 50%;
  background-color: #acacacff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nome = styled.input`
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  background: transparent;
  color: #999;

  &:disabled {
    background: transparent;
    color: #333;
  }
`;

export const Email = styled.input`
  font-size: 0.95rem;
  border: none;
  background: transparent;
  color: #999;
  width: 285px;

  &:disabled {
    background: transparent;
    color: #555;
  }
`;

export const Telefone = styled.input`
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  background: transparent;
  max-width: 200px;
  width: 100%;
  color: #999;

  &:disabled {
    background: transparent;
    color: #444;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

export const Tag = styled.span<CategoriaProps>`
  display: inline-block;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => retornaCorDeFundo(props)};
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 0.25rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const EditButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #141827;
  color: white;
  transition: 0.2s;

  &:hover {
    background-color: #28314dff;
  }
`;

export const DeleteButton = styled(EditButton)`
  background-color: ${variaveis.vermelho};

  &:hover {
    background-color: #bc302dff;
  }
`;

export const SaveButton = styled(EditButton)`
  background-color: ${variaveis.verde};

  &:hover {
    background-color: #0f380dff;
  }
`;
