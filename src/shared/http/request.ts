import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface ResponseWrapper<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface RequestParams {
  url: string | void;
  params?: string[][] | Record<string, string> | string | URLSearchParams | null;
  method?: string;
  body?: BodyInit | null;
}

function request<T>(
  defaultValue: T | null = null,
  setResponseWrapper: Dispatch<SetStateAction<ResponseWrapper<T>|null>>,
  requestParams: RequestParams,
): () => void {
  setResponseWrapper({
    loading: true,
    error: null,
    data: defaultValue,
  });

  const controller = new AbortController();
  const url = `${requestParams.url}?${new URLSearchParams(requestParams.params || {})}`;

  fetch(url, {
    method: requestParams.method,
    signal: controller.signal,
    body: requestParams.body,
  })
    .then(response => response.json())
    .then(data => setResponseWrapper({
      loading: false,
      error: null,
      data,
    }))
    .catch(error => error?.name !== 'AbortError' && setResponseWrapper({
      loading: false,
      error,
      data: null,
    }));

  return () => controller.abort();
}

export function useRequest<T>(
  defaultValue: T | null = null,
  initialParams = {
    url: undefined,
    method: 'GET',
  },
) {
  const [responseWrapper, setResponseWrapper] = useState<ResponseWrapper<T> | null>(null);
  const [requestParams, setRequestParams] = useState<RequestParams>(initialParams);

  useEffect(() => {
    if (requestParams.url) {
      return request(defaultValue, setResponseWrapper, requestParams)
    }
  }, [requestParams]);

  return {
    responseWrapper,
    setRequestParams,
  };
}
