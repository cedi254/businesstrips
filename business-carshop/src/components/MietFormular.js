import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MietFormular = ({ fahrzeug }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = (start, end) => {
    if (start && end) {
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      const dailyPrice = parseFloat(fahrzeug.preis.replace('€', '').replace('.', '').replace(',', '.'));
      setTotalPrice(daysDiff * dailyPrice);
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    calculatePrice(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    calculatePrice(startDate, date);
  };

  return (
    <div className="miet-formular">
      <h3>Mietformular</h3>
      <div>
        <label>Startdatum: </label>
        <DatePicker selected={startDate} onChange={handleStartDateChange} dateFormat="dd/MM/yyyy" />
      </div>
      <div>
        <label>Enddatum: </label>
        <DatePicker selected={endDate} onChange={handleEndDateChange} dateFormat="dd/MM/yyyy" />
      </div>
      {totalPrice > 0 && <p>Gesamtpreis: {totalPrice.toFixed(2)}€</p>}
    </div>
  );
};

export default MietFormular;
