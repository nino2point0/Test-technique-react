import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactElement,
  route: String,
};

const Layout = ({ children, route }: Props): JSX.Element => (
  <div className="Layout">
    <header className="Layout__header">
      <h1 className='Layout__title'>Test technique React.js</h1>
      <nav className='Navbar'>
        <ul className='Navbar__list'>
          <li className='Navbar__li'>
            <Link className={`Navbar__link ${route === 'home' ? 'Navbar__link__active' : ''}` } to={'/home'}>Home</Link>
          </li>
          <li className='Navbar__li'>
            <Link className={`Navbar__link ${route === 'todo' ? 'Navbar__link__active' : ''}`} to={'/todos'}>To do list</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="Layout__main">
      {children}
    </main>
  </div>
);

export default Layout;
