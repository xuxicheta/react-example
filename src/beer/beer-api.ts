import { ResponseWrapper, useRequest } from '../shared/http/request';
import { useEffect } from 'react';
import { BeerItem } from './beer.interface';



export const BeerApi = {
  apiUrl: 'https://api.punkapi.com/v2/beers',
  useBeerFetch(): ResponseWrapper<BeerItem[]> {
    const { setRequestParams, responseWrapper} = useRequest<BeerItem[]>();
    const url = this.apiUrl;

    useEffect(() => setRequestParams({ url }), [setRequestParams, url]);

    return responseWrapper!;
  },

  useBeerFetchById(id: number|null): ResponseWrapper<BeerItem> {
    const { setRequestParams, responseWrapper} = useRequest<BeerItem[]>();
    const url = id ? `${this.apiUrl}/${id}` : undefined;

    useEffect(() => setRequestParams({ url }), [setRequestParams, url]);

    if (!id) {
      return {
        loading: false,
        error: new Error('No id provided'),
        data: null,
      };
    }

    return {
      ...responseWrapper!,
      data: responseWrapper?.data?.[0] ?? null,
    };
  }
}


