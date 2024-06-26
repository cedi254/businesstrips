import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FahrzeugListeSeite from './pages/FahrzeugListeSeite';
import FahrzeugDetailSeite from './pages/FahrzeugDetailSeite';
import WunschlisteSeite from './pages/WunschlisteSeite';
import Header from './components/Header';
import WarenkorbSeite from './pages/WarenkorbSeite';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [fahrzeuge, setFahrzeuge] = useState([
    { id: 1, name: 'BMW X5', image: '/BMW_X5.jpg' , beschreibung: 'Ein luxuriöser SUV', text: 'Der BMW X5 kombiniert luxuriösen Komfort mit leistungsstarker Technologie und bietet Platz für 5 bis 7 Insassen, je nach Ausstattung. Dieser SUV beeindruckt durch seinen kraftvollen Antrieb, Allradfähigkeiten und seine elegante Erscheinung.', preis: '300€' },
    { id: 2, name: 'Audi A4', image: '/Audi_A4.jpg' , beschreibung: 'Ein sportlicher Sedan', text: 'Der Audi A4 vereint sportliches Design mit hoher Funktionalität und bietet Platz für bis zu fünf Personen. Mit einer breiten Palette an Motoren, einschließlich Benzin, Diesel und Plug-in-Hybrid, sowie einem fortschrittlichen Allradantrieb (quattro), kombiniert der A4 Leistung mit Effizienz. Seine hochwertige Innenausstattung und modernen Technologien machen ihn zu einem beliebten Vertreter seiner Klasse.', preis: '275€' },
    { id: 3, name: 'Mercedes-Benz C-Klasse', image: '/Mercedes_CKlasse.jpg', beschreibung: 'Eine elegante Limousine', text: 'Die Mercedes C-Klasse setzt Maßstäbe in puncto Eleganz und Fahrkomfort und bietet Platz für fünf Passagiere. Mit einer Auswahl an kraftvollen Motoren, einschließlich Benzin, Diesel und Hybrid, sowie optional Allradantrieb, kombiniert die C-Klasse erstklassige Fahrdynamik mit einer luxuriösen Ausstattung. Ihre innovative Technologie und das ansprechende Design machen sie zu einem Symbol für Stil und Performance.', preis: '350€' }
  ]);

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
