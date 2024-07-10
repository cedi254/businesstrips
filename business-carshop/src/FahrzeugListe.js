import React, { useEffect, useState } from 'react';
import { getVehicles, deleteVehicle } from '../api';

const FahrzeugListe = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const data = await getVehicles();
      setVehicles(data);
    };
    fetchVehicles();
  }, []);

  const handleDelete = async (id) => {
    await deleteVehicle(id);
    setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
  };

  return (
    <div>
      <h1>Fahrzeug Liste</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.name}
            <button onClick={() => handleDelete(vehicle.id)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FahrzeugListe;
