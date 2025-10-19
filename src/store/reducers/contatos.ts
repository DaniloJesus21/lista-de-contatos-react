import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";
import * as enums from "../../utils/enums/Contato";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      nome: "Danilo Jesús",
      categoria: enums.Categoria.AMIGOS,
      telefone: "(21) 97168-4644",
      email: "danilojesus212001@gmail.com",
      id: 1,
    },
    {
      nome: "Danilo Jesús",
      categoria: enums.Categoria.AMIGOS,
      telefone: "(21) 97168-4644",
      email: "danilojesus212001@gmail.com",
      id: 2,
    },
    {
      nome: "Danilo Jesús",
      categoria: enums.Categoria.AMIGOS,
      telefone: "(21) 97168-4644",
      email: "danilojesus212001@gmail.com",
      id: 3,
    },
    {
      nome: "Danilo Jesús",
      categoria: enums.Categoria.AMIGOS,
      telefone: "(21) 97168-4644",
      email: "danilojesus212001@gmail.com",
      id: 4,
    },
    {
      nome: "Danilo Jesús",
      categoria: enums.Categoria.AMIGOS,
      telefone: "(21) 97168-4644",
      email: "danilojesus212001@gmail.com",
      id: 5,
    },
    {
      nome: "Danilo Jesús",
      categoria: enums.Categoria.AMIGOS,
      telefone: "(21) 97168-4644",
      email: "danilojesus212001@gmail.com",
      id: 6,
    },
    {
      nome: "Danilo Jesús",
      categoria: enums.Categoria.AMIGOS,
      telefone: "(21) 97168-4644",
      email: "danilojesus212001@gmail.com",
      id: 7,
    },
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (
      state,
      action: PayloadAction<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
      }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );
      if (indexDoContato >= 0)
        state.itens[indexDoContato] = {
          ...state.itens[indexDoContato],
          telefone: action.payload.telefone,
          email: action.payload.email,
        };
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      );

      if (contatoJaExiste) {
        alert(
          "Já existe um contato cadastrado com este nome, insira sobrenome!"
        );
      } else {
        const ultimoId =
          state.itens.length > 0
            ? Math.max(...state.itens.map((c) => c.id))
            : 0;
        const novoId = ultimoId + 1;

        const novoContato = {
          ...action.payload,
          id: novoId,
        };
        state.itens.push(novoContato as Contato);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;
