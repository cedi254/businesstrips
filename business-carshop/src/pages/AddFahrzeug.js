// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddFahrzeug = () => {
//   const [fahrzeug, setFahrzeug] = useState({ name: '', text: '', image: '' });
//   const navigate = useNavigate();
//   const apiUrl = 'http://localhost:3030/fahrzeuge';

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFahrzeug((prevFahrzeug) => ({
//       ...prevFahrzeug,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(apiUrl, fahrzeug);
//       navigate('/');
//     } catch (error) {
//       console.error('Error adding vehicle:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={fahrzeug.name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Text:</label>
//         <input type="text" name="text" value={fahrzeug.text} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Image URL:</label>
//         <input type="text" name="image" value={fahrzeug.image} onChange={handleChange} />
//       </div>
//       <button type="submit">Add Fahrzeug</button>
//     </form>
//   );
// };

// export default AddFahrzeug;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddFahrzeug = () => {
  const [fahrzeug, setFahrzeug] = useState({ name: '', text: '', image: '', beschreibung: '', preis: '' });
  const navigate = useNavigate();
  const apiUrl = 'http://localhost:3030/fahrzeuge';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFahrzeug((prevFahrzeug) => ({
      ...prevFahrzeug,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrl, fahrzeug);
      navigate('/');
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={fahrzeug.name} onChange={handleChange} />
      </div>
      <div>
        <label>Text:</label>
        <input type="text" name="text" value={fahrzeug.text} onChange={handleChange} />
      </div>
      <div>
        <label>Beschreibung:</label>
        <input type="text" name="beschreibung" value={fahrzeug.beschreibung} onChange={handleChange} />
      </div>
      <div>
        <label>Preis:</label>
        <input type="number" name="preis" value={fahrzeug.preis} onChange={handleChange} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" name="image" value={fahrzeug.image} onChange={handleChange} />
      </div>
      <button type="submit">Add Fahrzeug</button>
    </form>
  );
};

export default AddFahrzeug;
