import React from 'react';
import FahrzeugListe from '../components/FahrzeugListe';

const FahrzeugListeSeite = ({ fahrzeuge }) => {
  return (
    <div>
      <FahrzeugListe fahrzeuge={fahrzeuge} />
    </div>
  );
};

export default FahrzeugListeSeite;
