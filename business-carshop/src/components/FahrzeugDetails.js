import React, { useState } from 'react';
import MietFormular from './MietFormular';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FahrzeugDetails = ({ fahrzeug, zurWunschlisteHinzufuegen, zumWarenkorbHinzufuegen }) => {
  const [mieten, setMieten] = useState(false);
  const navigate = useNavigate();
  const apiUrl = 'http://localhost:3030/fahrzeuge';

  const deleteFahrzeug = async () => {
    try {
      await axios.delete(`${apiUrl}/${fahrzeug.id}`);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  const editFahrzeug = () => {
    navigate(`/edit/${fahrzeug.id}`);
  };

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
          <button onClick={editFahrzeug}>Edit</button>
          <button onClick={deleteFahrzeug}>Delete</button>
        </div>
        {mieten && <MietFormular fahrzeug={fahrzeug} zumWarenkorbHinzufuegen={zumWarenkorbHinzufuegen} />}
      </div>
    </div>
  );
};

export default FahrzeugDetails;


// import React, { useState } from 'react';
// import MietFormular from './MietFormular';

// const FahrzeugDetails = ({ fahrzeug, zurWunschlisteHinzufuegen, zumWarenkorbHinzufuegen }) => {
//   const [mieten, setMieten] = useState(false);

//   return (
//     <div className="detail-container">
//       <div className="detail-bild-container">
//         <img className="detail-bild" src={fahrzeug.image} alt={fahrzeug.name} />
//         <div className="detail-title">{fahrzeug.name}</div>
//       </div>
//       <div className="detail-beschreibung">
//         <div className="detail-text">
//           <p className='detail-text-inhalt'>{fahrzeug.text}</p>
//         </div>
//         <div className="detail-buttons">
//           <button onClick={() => zurWunschlisteHinzufuegen(fahrzeug)}>Zur Wunschliste hinzufügen</button>
//           <button onClick={() => setMieten(!mieten)}>Fahrzeug mieten</button>
//         </div>
//         {mieten && <MietFormular fahrzeug={fahrzeug} zumWarenkorbHinzufuegen={zumWarenkorbHinzufuegen} />}
//       </div>
//     </div>
//   );
// };

// export default FahrzeugDetails;
