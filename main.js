import { adicionaItemLista, getLista, limpaLista } from "./lista.js";

const olItens = document.querySelector("ol#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adicionaNaLista)

atualizarLista();

function atualizarLista() {
  olItens.innerHTML = "";
  let lista = getLista();
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement("li");
    li.textContent = lista[i];
    olItens.appendChild(li);
  }
}

function limparItensDeLista() {
  limpaLista();
  atualizarLista();
}

function adicionaNaLista() {
  let entrada = pEntrada.textContent;
  adicionaItemLista(entrada);
  atualizarLista();
  pEntrada.innerHTML = "";
}