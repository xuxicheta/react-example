import { ResponseWrapper } from './http/request';
import { ReactElement, ReactNode } from 'react';


interface DataWrapperProps<T> {
  wrapper: ResponseWrapper<T>,
  children?: ReactNode,
  atLoading?: ReactElement,
  atError?: ReactElement,
}

export function Unwrap<T>({ wrapper, children, atLoading, atError }: DataWrapperProps<T>): ReactElement {
  return (
    <>
      {wrapper?.loading && (atLoading ?? <div className="pl-3">Loading...</div>)}
      {wrapper?.error && (atError ?? <div className="pl-3">Error occured...</div>)}
      {wrapper?.data && children}
    </>
  );
}
