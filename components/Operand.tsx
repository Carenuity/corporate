import React from 'react';

type IOperand = {
  operand: string;
};
const Operand: React.FC<IOperand> = ({ operand }) => {
  return (
    <div
      className="vstack bg-transparent align-items-center justify-content-center"
      style={{ maxWidth: '5rem', height: '10rem' }}
    >
      <h2 className="text-dark fw-bold display-2">{operand}</h2>
    </div>
  );
};

export default Operand;
