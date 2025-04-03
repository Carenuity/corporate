import React from 'react';

const ApplicationItem = ({ url, name }: { url: string; name: string }) => {
  return (
    <>
      <a
        href={url}
        target={'_blank'}
        className="d-flex align-items-center mb-4"
        rel="noreferrer"
      >
        <i className="ti-link display-26 text-primary"></i>
        <span className="ms-3 text-dark fw-bold">{name}</span>
      </a>
    </>
  );
};

export default ApplicationItem;
