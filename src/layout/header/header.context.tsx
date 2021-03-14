import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';

export type HeaderLink = {
  text: string | undefined;
  path: string | undefined;
} | null;

export type HeaderLinkContext = {
  headerLink: HeaderLink;
  setHeaderLink: Dispatch<SetStateAction<HeaderLink>>;
} | undefined;

const headerContext = createContext<HeaderLinkContext>(undefined);

export const useHeaderLink = (): HeaderLinkContext => useContext(headerContext);

export function HeaderLinkProvider<P>(props: P): JSX.Element {
  const [headerLink, setHeaderLink] = useState<HeaderLink>(null);
  const value = useMemo(() => ({ headerLink, setHeaderLink }), [headerLink])

  return (<headerContext.Provider value={value} {...props} />);
}
