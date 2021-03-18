import { contextStoreFactory, storeFactory } from './data/store-factory';

export type HeaderLink = {
  text: string | undefined;
  path: string | undefined;
} | null;

export interface RootState {
  headerLink: HeaderLink;
}

export const RootStore = contextStoreFactory<RootState>(storeFactory({
  headerLink: null,
}));
