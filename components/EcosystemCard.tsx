import React from 'react';

type IEcosystemCard = {
  image: string;
  label: string;
};

const EcosystemCard: React.FC<IEcosystemCard> = ({ image, label }) => {
  return (
    <div className="card shadow-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={label} />

      <div className="card-body">
        <h3 className="card-title text-center text-dark">{label}</h3>
      </div>
    </div>
  );
};

export default EcosystemCard;
