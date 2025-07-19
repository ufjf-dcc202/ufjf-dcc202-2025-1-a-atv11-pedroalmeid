import { adicionaNaLista, getLista, limpaLista } from "./lista.js";

const olItens = document.querySelector("ol#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adicionaItemLista)

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

function adicionaItemLista() {
  let entrada = pEntrada.textContent;
  adicionaNaLista(entrada);
  atualizarLista();
  pEntrada.innerHTML = "";
}