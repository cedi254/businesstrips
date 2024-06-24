import React from 'react';
import { useParams } from 'react-router-dom';
import FahrzeugDetails from '../components/FahrzeugDetails';

const FahrzeugDetailSeite = ({ fahrzeuge, zurWunschlisteHinzufuegen }) => {
  const { id } = useParams();
  const fahrzeug = fahrzeuge.find(f => f.id === parseInt(id));

  if (!fahrzeug) {
    return <p>Fahrzeug nicht gefunden!</p>;
  }

  return (
    <div>
      <FahrzeugDetails fahrzeug={fahrzeug} zurWunschlisteHinzufuegen={zurWunschlisteHinzufuegen} />
    </div>
  );
};

export default FahrzeugDetailSeite;
