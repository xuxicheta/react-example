import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

export function contextFactory<D>() {
  const context = createContext<[D, Dispatch<SetStateAction<D>>] | undefined>(undefined);
  const useGet: () => D|undefined = () => useContext(context)?.[0];
  const useSet: () => Dispatch<SetStateAction<D>>|undefined = () => useContext(context)?.[1];
  const Provider = (props: any) => (<context.Provider value={useState<D | undefined>(undefined)} {...props} />);

  return { context, useGet, useSet, Provider };
}
