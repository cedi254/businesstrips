import React from 'react';
import Wunschliste from '../components/Wunschliste';

const WunschlisteSeite = ({ wunschliste }) => {
  return (
    <div>
      <Wunschliste wunschliste={wunschliste} />
    </div>
  );
};

export default WunschlisteSeite;
