import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Autovermietung Zürich</h1>
      <nav>
        <Link to="/">Fahrzeuge</Link> | <Link to="/wunschliste">Wunschliste</Link> | <Link to="/warenkorb">Warenkorb</Link> | <Link to="/create">CRUD-Form</Link>
      </nav>
    </header>
  );
};

export default Header;
