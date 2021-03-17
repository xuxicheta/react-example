import { ResponseWrapper } from './http/request';
import { ReactNode } from 'react';


interface DataWrapperProps<T> {
  wrapper: ResponseWrapper<T>,
  children?: ReactNode,
  atLoading?: JSX.Element,
  atError?: JSX.Element,
}

export function DataWrapper<T>(
  {
    wrapper,
    children,
    atLoading = <div className="pl-3">Loading...</div>,
    atError = <div className="pl-3">Error occured...</div>,
  }: DataWrapperProps<T>): JSX.Element {
  if (wrapper?.error) {
    console.log(wrapper?.error)
  }

  return (
    <>
      {wrapper?.loading && atLoading}
      {wrapper?.error && atError}
      {wrapper?.data && children}
    </>
  );
}
