import { contextFactory } from '../../shared/data/context-factory';

export type HeaderLink = {
  text: string | undefined;
  path: string | undefined;
} | null;


export const HeaderContext = contextFactory<HeaderLink>();
