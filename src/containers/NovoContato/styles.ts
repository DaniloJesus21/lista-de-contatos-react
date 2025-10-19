import styled from "styled-components";
import { IMaskInput } from "react-imask"; // ✅ Importa o IMaskInput

/* ===== CONTAINERS ===== */
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
  padding: 0 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

/* ===== CAMPOS DE TEXTO ===== */
export const CampoCadastro = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #fff;
  transition: 0.2s;

  &:focus {
    border-color: "#28314d";
    outline: none;
    box-shadow: 0 0 4px rgba(40, 49, 77, 0.3);
  }
`;

/* ✅ Campo de telefone com máscara (usa IMaskInput) */
export const CampoTelefone = styled(IMaskInput)`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #fff;
  transition: 0.2s;

  &:focus {
    border-color: "#28314d";
    outline: none;
    box-shadow: 0 0 4px rgba(40, 49, 77, 0.3);
  }
`;

/* ===== RADIO BUTTONS ===== */
export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-weight: 600;
    margin-bottom: 4px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  input[type="radio"] {
    accent-color: "#28314d";
  }
`;

/* ===== TÍTULO ===== */
export const Titulo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #141827;
  margin-bottom: 8px;
`;

export const BotaoCadastrar = styled.button`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #28314d;
`;
