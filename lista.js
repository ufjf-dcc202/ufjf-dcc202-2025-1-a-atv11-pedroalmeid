const lista = ["teste", "dois", "três"];

export function getLista() {
  return structuredClone(lista);
}

export function limpaLista() {
  lista.splice(0);
}

export function adicionaItemLista(texto) {
  lista.push(texto)
}