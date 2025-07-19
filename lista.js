const lista = ["Um", "Dois", "Três"];

export function getLista() {
  return structuredClone(lista);
}

export function limpaLista() {
  lista.splice(0);
}

export function adicionaNaLista(texto) {
  lista.push(texto)
}

export function removeDaLista(pos) {
  lista.splice(pos, 1)
}