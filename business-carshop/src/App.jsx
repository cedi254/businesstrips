import React, { useState } from 'react';
import FahrzeugListe from './components/FahrzeugListe';
import AddFahrzeugForm from './components/AddFahrzeugForm';
import EditFahrzeugForm from './components/EditFahrzeugForm';

const App = () => {
  const [selectedFahrzeug, setSelectedFahrzeug] = useState(null);
  const [fahrzeuge, setFahrzeuge] = useState([]);

  const handleFahrzeugAdded = (newFahrzeug) => {
    setFahrzeuge([...fahrzeuge, newFahrzeug]);
  };

  const handleFahrzeugUpdated = (updatedFahrzeug) => {
    setFahrzeuge(
      fahrzeuge.map((fahrzeug) => (fahrzeug.id === updatedFahrzeug.id ? updatedFahrzeug : fahrzeug))
    );
    setSelectedFahrzeug(null);
  };

  const handleFahrzeugLoeschen = (id) => {
    setFahrzeuge(fahrzeuge.filter((fahrzeug) => fahrzeug.id !== id));
  };

  return (
    <div className="app">
      <h1>Fahrzeugverwaltung</h1>
      <AddFahrzeugForm onFahrzeugAdded={handleFahrzeugAdded} />
      {selectedFahrzeug && (
        <EditFahrzeugForm fahrzeugId={selectedFahrzeug.id} onFahrzeugUpdated={handleFahrzeugUpdated} />
      )}
      <FahrzeugListe fahrzeugAuswaehlen={setSelectedFahrzeug} fahrzeugLoeschen={handleFahrzeugLoeschen} />
    </div>
  );
};

export default App;
