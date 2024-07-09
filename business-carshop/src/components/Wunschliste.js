import React from 'react';

const Wunschliste = ({ wunschliste }) => {
  return (
    <div className="wunschliste">
      <h2>Wunschliste</h2>
      {wunschliste.length === 0 ? (
        <p>Keine Fahrzeuge in der Wunschliste.</p>
      ) : (
        wunschliste.map((fahrzeug) => (
        <ul>
            <li>
            <div key={fahrzeug.id} className="fahrzeug">
            <h3>{fahrzeug.name}</h3>
            <img src={fahrzeug.image}></img>
            </div>
            </li>
        </ul>
        ))
      )}
    </div>
  );
};

export default Wunschliste;
