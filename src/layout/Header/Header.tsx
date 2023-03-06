import { Link } from 'react-router-dom';
import { ReactElement } from 'react';

export const Header = (): ReactElement => {
  return (
    <header className="border-b border-b-gray-700">
      <div className="main-container">
        <div className="flex justify-between py-4">
          <h2 className="text-3xl font-semibold text-white">Hotel</h2>
          <div className="flex items-center">
            <Link className="ml-10 text-white" to="/">
              Home
            </Link>
            <Link className="ml-10 text-white" to="/cleaning">
              Cleaning
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
