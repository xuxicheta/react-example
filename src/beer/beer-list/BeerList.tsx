import { BeerApi } from '../beer-api';

import { Link } from 'react-router-dom';
import { BeerSearch } from './BeerSearch';
import { BeerShort } from './BeerShort';
import { useState } from 'react';

export function BeerList() {
  const beers = BeerApi.useBeerFetch();
  const data = beers?.data ?? [];
  const [search, setSearch] = useState('');

  return (
    <div className="container block mx-auto">
      <BeerSearch onSearch={setSearch}/>
      {data.map(beer => {
        return (
          <Link
            to={{
              pathname: '/beer/details',
              search: `id=${beer.id}`
            }}
            key={beer.id}
          >
            <BeerShort beer={beer}/>
          </Link>
        );
      })}
    </div>
  );
}
