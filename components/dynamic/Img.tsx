import { ComponentProps } from 'react'

const Img = (props: ComponentProps<any>) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt='Carenuity' {...props} />
    </>
  );
};

export default Img