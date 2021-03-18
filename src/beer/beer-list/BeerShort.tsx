import { BeerItem } from '../beer.interface';
import { ReactElement } from 'react';

interface PieceProps {
  title: string;
  value: string;
}

function Piece({ title, value }: PieceProps): ReactElement {
  return (
    <div>
      <small className="capitalize">{title}:</small>
      <span className="pl-2">{value}</span>
    </div>
  );
}

interface BeerShortProps {
  beer: BeerItem
}

export function BeerShort({ beer }: BeerShortProps): ReactElement {
  return (
    <div className="block p-5 my-3 bg-white rounded-md shadow-lg transform cursor-pointer hover:translate-x-2 transition-all">
      <section className="flex">
        <div className="pl-2 pr-6">
          <img
            className="h-12"
            src={beer.image_url!}
            alt="beer"
          />
        </div>

        <div>
          <Piece
            title="name"
            value={beer.name}
          />
          <Piece
            title="tagline"
            value={beer.tagline}
          />
        </div>
      </section>
    </div>
  );
}
