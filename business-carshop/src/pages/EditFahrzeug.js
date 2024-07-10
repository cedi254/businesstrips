// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditFahrzeug = () => {
//   const { id } = useParams();
//   const [fahrzeug, setFahrzeug] = useState({ name: '', text: '', image: '' });
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const apiUrl = 'http://localhost:3030/fahrzeuge';

//   useEffect(() => {
//     const fetchFahrzeug = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/${id}`);
//         setFahrzeug(response.data);
//         setLoading(false);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching vehicle:', error);
//         setLoading(false);
//       }
//     };
//     fetchFahrzeug();
//   }, [id]);

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
//       await axios.put(`${apiUrl}/${id}`, fahrzeug);
//       navigate(`/fahrzeug/${id}`);
//     } catch (error) {
//       console.error('Error updating vehicle:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

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
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default EditFahrzeug;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditFahrzeug = () => {
  const { id } = useParams();
  const [fahrzeug, setFahrzeug] = useState({ name: '', text: '', image: '', beschreibung: '', preis: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const apiUrl = 'http://localhost:3030/fahrzeuge';

  useEffect(() => {
    const fetchFahrzeug = async () => {
      try {
        const response = await axios.get(`${apiUrl}/${id}`);
        setFahrzeug(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vehicle:', error);
        setLoading(false);
      }
    };
    fetchFahrzeug();
  }, [id]);

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
      await axios.put(`${apiUrl}/${id}`, fahrzeug);
      navigate(`/fahrzeug/${id}`);
      window.location.reload();
    } catch (error) {
      console.error('Error updating vehicle:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
      <button type="submit">Save</button>
    </form>
  );
};

export default EditFahrzeug;

