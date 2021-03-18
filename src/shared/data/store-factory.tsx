import { ComponentProps, createContext, Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';

interface Event<S, K extends keyof S> {
  type: K;
  detail: S[K],
}

export interface Store<S extends object> {
  get<K extends keyof S>(type: K): S[K];
  on<K extends keyof S>(type: K, subscriber: (v: S[K]) => void): () => void;
  emit<K extends keyof S>(type: K, detail: S[K] | S): void;
}

export function storeFactory<S extends object>(defaultValue: S = {} as S): Store<S> {
  let listeners: Dispatch<any>[] = [];
  const value = { ...defaultValue };
  const get = <K extends keyof S>(type: K): S[K] => value[type];
  const on = <K extends keyof S>(type: K, subscriber: (v: S[K]) => void): () => void => {
    const listener = (e: Event<S, K>) => (e.type === type && subscriber(e.detail));
    listeners.push(listener);

    return () => (listeners = listeners.filter(l => l !== listener));
  };
  const emit = <K extends keyof S>(type: K, detail: S[K] | S): void => listeners.forEach(listener => listener({
    type,
    detail
  }));

  return { get, on, emit };
}

export interface ContextStore<S extends object> {
  useStore<K extends keyof S>(type: K): Readonly<[S[K], (v: S[K]) => void]>;
  Provider<Props extends object>(props: Props): ReactElement;
}

export function contextStoreFactory<S extends object>(store: Store<S>): ContextStore<S> {
  const context = createContext(store);
  const Provider = <Props extends object>(props: Props): ReactElement => (<context.Provider value={store} {...props} />);
  const useStore = <K extends keyof S>(type: K): Readonly<[S[K], (v: S[K]) => void]> => {
    const [value, setValue] = useState(store.get(type));
    useEffect(() => store.on(type, setValue), []);
    const setState = (v: S[typeof type]) => store.emit(type, v);
    return [value, setState] as const;
  };

  return { useStore, Provider };
}
