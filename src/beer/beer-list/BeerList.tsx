import { BeerApi } from '../beer-api';
import BeerShort from './BeerShort';
import { Link } from 'react-router-dom';

export default function BeerList() {
  const beers = BeerApi.useBeerFetch();
  const data = beers?.data ?? [];

  return (
    <div className="container block mx-auto">
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
