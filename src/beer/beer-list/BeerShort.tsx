import { BeerItem } from '../beer.interface';

function Fragment({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <small className="capitalize">{title}:</small>
      <span className="pl-2">{value}</span>
    </div>
  );
}

export default function BeerShort({ beer }: { beer: BeerItem }) {
  return (
    <div className="block p-5 bg-white rounded-md shadow-lg sm:w-full m-3 transform cursor-pointer hover:translate-x-2 transition-all">
      <section className="flex">
        <div className="pl-2 pr-6">
          <img
            className="h-12"
            src={beer.image_url!}
            alt="beer"
          />
        </div>

        <div>
          <Fragment
            title="name"
            value={beer.name}
          />
          <Fragment
            title="tagline"
            value={beer.tagline}
          />
        </div>
      </section>
    </div>
  );
}
