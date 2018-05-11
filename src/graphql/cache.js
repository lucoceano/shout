import { CachePersistor } from 'apollo-cache-persist';

let persistor;

export function getPersistor() {
  return persistor;
}

export function startCache(options) {
  persistor = new CachePersistor(options);
}
