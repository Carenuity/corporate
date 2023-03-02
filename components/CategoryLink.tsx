import React from 'react'

const CategoryLink = ({ name, url }: { name: string; url: string }) => {
  return (
    <>
      <li>
        <a href={url}>
          <span>{name}</span>
        </a>
      </li>
    </>
  );
};

export default CategoryLink