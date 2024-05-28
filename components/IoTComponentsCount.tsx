import React from 'react';

type IIoTComponentsCount = {
  count: number;
  label: string;
  bgColor: string;
};

const IoTComponentsCount: React.FC<IIoTComponentsCount> = ({
  count,
  label,
  bgColor,
}) => {
  return (
    <div
      className="vstack align-items-center justify-content-center"
      style={{ maxWidth: '15rem', height: '10rem', backgroundColor: bgColor }}
    >
      <h2 className="text-white display-2">{count}</h2>
      <span className="text-white fw-bold h4">{label}</span>
    </div>
  );
};

export default IoTComponentsCount;
