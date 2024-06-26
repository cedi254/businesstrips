import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MietFormular = ({ fahrzeug, zumWarenkorbHinzufuegen }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (startDate && endDate) {
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      const dailyPrice = parseFloat(fahrzeug.preis.replace('€', '').replace('.', '').replace(',', '.'));
      setTotalPrice(daysDiff * dailyPrice);
    }
  }, [startDate, endDate, fahrzeug.preis]);

  const handleMieten = () => {
    const mietDaten = { startDate, endDate, totalPrice };
    zumWarenkorbHinzufuegen(fahrzeug, mietDaten);
  };

  return (
    <div className="miet-formular">
      <h3>Mietformular</h3>
      <div>
        <label>Startdatum: </label>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy" />
      </div>
      <div>
        <label>Enddatum: </label>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} dateFormat="dd/MM/yyyy" />
      </div>
      {totalPrice > 0 && <p>Gesamtpreis: {totalPrice.toFixed(2)}€</p>}
      <button onClick={handleMieten}>Zum Warenkorb hinzufügen</button>
    </div>
  );
};

export default MietFormular;
