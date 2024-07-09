// import React from 'react';
// import FahrzeugListe from '../components/FahrzeugListe';

// const FahrzeugListeSeite = ({ fahrzeuge }) => {
//   return (
//     <div>
//       <FahrzeugListe fahrzeuge={fahrzeuge} />
//     </div>
//   );
// };

// export default FahrzeugListeSeite;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import FahrzeugListe from '../components/FahrzeugListe';

const FahrzeugListeSeite = ({ fahrzeuge }) => {
  const navigate = useNavigate();

  const handleAddFahrzeug = () => {
    navigate('/add');
  };

  return (
    <div>
      <FahrzeugListe fahrzeuge={fahrzeuge} />
      <button onClick={handleAddFahrzeug}>Add Fahrzeug</button>
    </div>
  );
};

export default FahrzeugListeSeite;
