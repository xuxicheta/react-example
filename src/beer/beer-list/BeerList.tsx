import { BeerApi } from '../beer-api';

import { Link } from 'react-router-dom';
import { BeerSearch } from './BeerSearch';
import { BeerShort } from './BeerShort';
import { ReactElement, useState } from 'react';
import { Unwrap } from '../../shared/Unwrap';


export function BeerList(): ReactElement {
  const [search, setSearch] = useState('');
  const beers = BeerApi.useBeerFetch(search);

  return (
    <div className="container block mx-auto">
      <BeerSearch onSearch={setSearch}/>
      <Unwrap wrapper={beers}>
        {beers?.data?.length === 0 && <div className="pl-3">No items found</div>}
        {(beers?.data ?? []).map(beer => {
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
      </Unwrap>
    </div>
  );
}
