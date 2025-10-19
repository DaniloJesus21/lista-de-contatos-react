import { Link } from "react-router-dom";
import styled from "styled-components";

export const BotaoNovoContato = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;

  width: 60px;
  height: 60px;

  font-size: 28px;
  text-decoration: none;
  color: #e0e0e0;
  background-color: #141827;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;
