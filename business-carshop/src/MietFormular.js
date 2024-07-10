import React, { useState } from 'react';
import { createVehicle, updateVehicle } from '../api';

const MietFormular = ({ existingVehicle, onSave }) => {
  const [vehicle, setVehicle] = useState(existingVehicle || { name: '', model: '', year: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (vehicle.id) {
      await updateVehicle(vehicle.id, vehicle);
    } else {
      await createVehicle(vehicle);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={vehicle.name} onChange={handleChange} placeholder="Name" required />
      <input name="model" value={vehicle.model} onChange={handleChange} placeholder="Model" required />
      <input name="year" value={vehicle.year} onChange={handleChange} placeholder="Year" required />
      <button type="submit">Speichern</button>
    </form>
  );
};

export default MietFormular;
