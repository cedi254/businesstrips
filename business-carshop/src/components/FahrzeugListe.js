import React from 'react';
import Fahrzeug from './Fahrzeug';
import { useNavigate } from 'react-router-dom';

const FahrzeugListe = ({ fahrzeuge }) => {
  const navigate = useNavigate();

  const fahrzeugAuswaehlen = (fahrzeug) => {
    navigate(`/fahrzeug/${fahrzeug.id}`);
  };

  return (
    <div className="fahrzeug-liste">
      <h2>Fahrzeuge</h2>
      {fahrzeuge.map((fahrzeug) => (
        <Fahrzeug key={fahrzeug.id} fahrzeug={fahrzeug} fahrzeugAuswaehlen={fahrzeugAuswaehlen} />
      ))}
    </div>
  );
};

export default FahrzeugListe;


// import React from 'react';
// import Fahrzeug from './Fahrzeug';

// const FahrzeugListe = ({ fahrzeuge, fahrzeugAuswaehlen }) => {
//   return (
//     <div className="fahrzeug-liste">
//       <h2>Fahrzeuge</h2>
//       {fahrzeuge.map((fahrzeug) => (
//         <Fahrzeug key={fahrzeug.id} fahrzeug={fahrzeug} fahrzeugAuswaehlen={fahrzeugAuswaehlen} />
//       ))}
//     </div>
//   );
// };

// export default FahrzeugListe;
