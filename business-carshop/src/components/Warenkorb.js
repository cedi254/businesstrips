import React from 'react';

const Warenkorb = ({ warenkorb, ausWarenkorbEntfernen }) => {
  return (
    <div className="warenkorb">
      <h2>Warenkorb</h2>
      {warenkorb.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <ul>
          {warenkorb.map((item, index) => (
            <li key={index}>
              <div className="warenkorb-item">
                <h3>{item.name}</h3>
                <img src={item.image}></img>
                <p>Startdatum: {item.mietDaten.startDate.toLocaleDateString()}</p>
                <p>Enddatum: {item.mietDaten.endDate.toLocaleDateString()}</p>
                <p>Gesamtpreis: {item.mietDaten.totalPrice.toFixed(2)}€</p>
                <button onClick={() => ausWarenkorbEntfernen(index)}>Entfernen</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Warenkorb;
