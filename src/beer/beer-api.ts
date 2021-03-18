import { RequestParams, ResponseWrapper, useRequest } from '../shared/http/request';
import { useEffect } from 'react';
import { BeerItem } from './beer.interface';


export const BeerApi = {
  apiUrl: 'https://api.punkapi.com/v2/beers',

  useBeerFetch(search = ''): ResponseWrapper<BeerItem[]> {
    const { setRequestParams, responseWrapper } = useRequest<BeerItem[]>();

    useEffect(() => {
      const requestParams: RequestParams = {
        url: this.apiUrl,
      }
      if (search) {
        requestParams.params = { beer_name: search };
      }

      setRequestParams(requestParams);
    }, [search]);

    return responseWrapper!;
  },

  useBeerFetchById(id: number | null): ResponseWrapper<BeerItem> {
    const { setRequestParams, responseWrapper } = useRequest<BeerItem[]>();

    useEffect(() => {
      const requestParams: RequestParams = {
        url: id ? `${this.apiUrl}/${id}` : undefined,
      }

      setRequestParams(requestParams);
    }, [id]);

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
} as const;


