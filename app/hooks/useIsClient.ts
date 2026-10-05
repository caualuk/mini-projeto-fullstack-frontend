import { useSyncExternalStore } from "react";

// Função vazia: não há nada para "escutar"
const subscribe = () => () => {};

// Retorna true apenas no navegador (false durante a renderização no servidor)
// Útil para ler o localStorage sem erro de hidratação
export function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
