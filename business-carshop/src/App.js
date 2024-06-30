import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FahrzeugListeSeite from './pages/FahrzeugListeSeite';
import FahrzeugDetailSeite from './pages/FahrzeugDetailSeite';
import WunschlisteSeite from './pages/WunschlisteSeite';
import Header from './components/Header';
import WarenkorbSeite from './pages/WarenkorbSeite';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const App = () => {
  const [fahrzeuge, setFahrzeuge] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3030/fahrzeuge')
    .then(res => {
      setFahrzeuge(res.data)
    })
  }, [])

  const [wunschliste, setWunschliste] = useState([]);
  const [warenkorb, setWarenkorb] = useState([]);
  const [meldung, setMeldung] = useState('');

  const zurWunschlisteHinzufuegen = (fahrzeug) => {
    if (!wunschliste.includes(fahrzeug)) {
      setWunschliste([...wunschliste, fahrzeug]);
      setMeldung(`${fahrzeug.name} wurde zur Wunschliste hinzugefügt`);
      setTimeout(() => setMeldung(''), 3000);
    }
  };

  const vonWunschlisteEntfernen = (fahrzeugId) => {
    setWunschliste(wunschliste.filter(f => f.id !== fahrzeugId));
  };

  const zumWarenkorbHinzufuegen = (fahrzeug, mietDaten) => {
    setWarenkorb([...warenkorb, { ...fahrzeug, mietDaten }]);
    setMeldung(`${fahrzeug.name} wurde zum Warenkorb hinzugefügt`);
    setTimeout(() => setMeldung(''), 3000);
  };

  const ausWarenkorbEntfernen = (index) => {
    const newWarenkorb = [...warenkorb];
    newWarenkorb.splice(index, 1);
    setWarenkorb(newWarenkorb);
  };

  return (
    <div>
      <Header />
      <div className="container">
        {meldung && <div className="meldung">{meldung}</div>}
        <Routes>
          <Route path="/" element={<FahrzeugListeSeite fahrzeuge={fahrzeuge} />} />
          <Route path="/fahrzeug/:id" element={<FahrzeugDetailSeite fahrzeuge={fahrzeuge} zurWunschlisteHinzufuegen={zurWunschlisteHinzufuegen} zumWarenkorbHinzufuegen={zumWarenkorbHinzufuegen} />} />
          <Route path="/wunschliste" element={<WunschlisteSeite wunschliste={wunschliste} />} />
          <Route path="/warenkorb" element={<WarenkorbSeite warenkorb={warenkorb} ausWarenkorbEntfernen={ausWarenkorbEntfernen} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
