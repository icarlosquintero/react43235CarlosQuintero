import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <button>Celulares</button>
        </li>
        <li>
          <button>Televisores</button>
        </li>
        <li>
          <button>Audio</button>
        </li>
        <li>
          <button>Electro</button>
        </li>
        <li>
          <button>Accesorios</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;