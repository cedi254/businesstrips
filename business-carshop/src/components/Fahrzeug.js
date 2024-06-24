import React from 'react';

const Fahrzeug = ({ fahrzeug, fahrzeugAuswaehlen }) => {
  return (
    <div className="fahrzeug" onClick={() => fahrzeugAuswaehlen(fahrzeug)}>
      <h3>{fahrzeug.name}</h3>
      <img src={fahrzeug.image} alt='bild'/>
      <h4>Beschriebung:</h4>
      <p>{fahrzeug.beschreibung}</p>
    </div>
  );
};

export default Fahrzeug;
