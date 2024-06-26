import React from 'react';
import { useParams } from 'react-router-dom';
import FahrzeugDetails from '../components/FahrzeugDetails';

const FahrzeugDetailSeite = ({ fahrzeuge, zurWunschlisteHinzufuegen, zumWarenkorbHinzufuegen }) => {
  const { id } = useParams();
  const fahrzeug = fahrzeuge.find(f => f.id === parseInt(id));

  if (!fahrzeug) {
    return <p>Fahrzeug nicht gefunden!</p>;
  }

  return (
    <div>
      {/* Hier wird die Funktion `zumWarenkorbHinzufuegen` als Prop an FahrzeugDetails übergeben */}
      <FahrzeugDetails fahrzeug={fahrzeug} zurWunschlisteHinzufuegen={zurWunschlisteHinzufuegen} zumWarenkorbHinzufuegen={zumWarenkorbHinzufuegen} />
    </div>
  );
};

export default FahrzeugDetailSeite;
