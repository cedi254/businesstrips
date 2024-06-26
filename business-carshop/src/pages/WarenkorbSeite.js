import React from 'react';
import Warenkorb from '../components/Warenkorb';

const WarenkorbSeite = ({ warenkorb, ausWarenkorbEntfernen }) => {
  return (
    <div>
      <Warenkorb warenkorb={warenkorb} ausWarenkorbEntfernen={ausWarenkorbEntfernen} />
    </div>
  );
};

export default WarenkorbSeite;
