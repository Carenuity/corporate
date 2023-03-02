import React from 'react'

const MediaHandle = ({
  url,
  icon,
  classNames,
}: {
  url: string;
  icon: string;
  classNames?: string;
}) => {
  return (
    <>
      <li className={`${classNames} me-1`}>
        <a href={url}>
          <i className={icon}></i>
        </a>
      </li>
    </>
  );
};

export default MediaHandle;