import { Link } from 'react-router-dom';
import { HeaderContext } from './header.context';

export default function Header() {
  const headerLink = HeaderContext.useGet();

  return (
    <nav className="bg-white px-6 py-4 shadow">
      <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between px-6">
        <div className="flex items-center lowercase">
          <Link
            to="/beer"
            className="text-gray-800 text-xl font-bold md:text-2xl hover:text-blue-800 transition transition-colors"
          >Beers</Link>
          {headerLink?.path && <Link
            className="text-gray-800 text-xl font-bold md:text-2xl hover:text-blue-800 transition transition-colors"
            to={headerLink.path!}
          >
            <span className="px-0.5">/</span>{headerLink.text}
          </Link>}
        </div>

        <div className="md:flex flex-col md:flex-row md:-mx-4">
          <Link
            to="beer/list"
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >List</Link>
        </div>
      </div>
    </nav>
  );
}
