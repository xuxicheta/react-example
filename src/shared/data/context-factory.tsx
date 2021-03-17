import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

export function contextFactory<D>() {
  const context = createContext<[D, Dispatch<SetStateAction<D>>] | undefined>(undefined);
  const useValue: () => D|undefined = () => useContext(context)?.[0];
  const useSetValue: () => Dispatch<SetStateAction<D>>|undefined = () => useContext(context)?.[1];
  const Provider = (props: any) => (<context.Provider value={useState<D | undefined>(undefined)} {...props} />);

  return { context, useGet: useValue, useSet: useSetValue, Provider };
}
