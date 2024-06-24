import React, { useState } from 'react';
import MietFormular from './MietFormular';

const FahrzeugDetails = ({ fahrzeug, zurWunschlisteHinzufuegen }) => {
    const [mieten, setMieten] = useState(false);

  return (
    <div className="detail-container">
      <div className="detail-bild-container">
        <img className="detail-bild" src={fahrzeug.image} alt={fahrzeug.name} />
        <div className="detail-title">{fahrzeug.name}</div>
      </div>
      <div className="detail-beschreibung">
        <div className="detail-text">
          <p className='detail-text-inhalt'>{fahrzeug.text}</p>
        </div>
        <div className="detail-buttons">
          <button onClick={() => zurWunschlisteHinzufuegen(fahrzeug)}>Zur Wunschliste hinzufügen</button>
          <button onClick={() => setMieten(!mieten)}>Fahrzeug mieten</button>
        </div>
        {mieten && <MietFormular fahrzeug={fahrzeug} />}
      </div>
    </div>
  );
};

export default FahrzeugDetails;
