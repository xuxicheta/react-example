import { BeerApi } from '../beer-api';
import { useLocation } from 'react-router-dom';
import { HeaderContext } from '../../layout/header/header.context';
import { useEffect } from 'react';
import { DataWrapper } from '../../shared/data-wrapper';

function Piece({ title, value }: { title: string; value: string }) {
  return (
    <div className="mt-1">
      <h3 className="font-semibold">{title}:</h3>
      <span className="pl-2">{value}</span>
    </div>
  );
}

export function BeerDetails() {
  const id = +(new URLSearchParams(useLocation().search).get('id'))!;
  const beersWrapper = BeerApi.useBeerFetchById(id);
  const beer = beersWrapper?.data;
  const setHeaderLink = HeaderContext.useSetValue()!;

  useEffect(() => {
    if (beer?.name) {
      setHeaderLink({
        text: beer.name,
        path: `/beer/details/${beer.id}`,
      });
    }

    return () => setHeaderLink(null);
  }, [beer]);

  return (
    <div>
      <section className="px-2 py-1 flex mt-2 container mx-auto">
        <DataWrapper wrapper={beersWrapper}>
          {beer && <>
            <div className="border-r w-64">
              <img
                className="h-96 mx-auto"
                src={beer.image_url!}
                alt="beer"
              />
            </div>
            <div className="pl-6">
              <Piece
                title="Name"
                value={beer.name}
              />
              <Piece
                title="Description"
                value={beer.description}
              />
              <Piece
                title="Tagline"
                value={beer.tagline}
              />

              {beer.ingredients && <div className="mt-3">
                <strong>Ingredients:</strong>
                <h2 className="mt-1">Hops:</h2>
                {beer.ingredients.hops.map((hop, i) => (
                  <div key={i}><span className="pl-4">{hop.name}</span></div>
                ))}
                <h2 className="mt-1">Malt:</h2>
                {beer.ingredients.malt.map((malt, i) => (
                  <div key={i}><span className="pl-4">{malt.name}</span></div>
                ))}
              </div>}
            </div>
          </>}

        </DataWrapper>
      </section>
    </div>
  );
}
