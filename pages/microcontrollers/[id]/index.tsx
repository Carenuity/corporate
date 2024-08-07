/* eslint-disable react/jsx-no-undef */
import { Microcontroller } from '../../../utils/types';
import { microcontrollers } from '../../../utils/constants';
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import MicrocontrollerDetails from '../../../components/MicrocontrollerDetails';
import PageTitle from '../../../components/PageTitle';
import Head from 'next/head';

const Index = ({
  name,
  id,
  description,
  imageUrl,
  imageHighlight,
  disclaimer,
  externalUrl,
}: {
  name: string;
  id: string;
  description: string;
  imageUrl: string;
  imageHighlight: string;
  disclaimer?: string;
  externalUrl?: string;
}) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>{name}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/microcontrollers', title: 'Microcontrollers' }]}
        pageTitle={name}
        pageUrl={`/microcontrollers/${id}`}
      />
      <MicrocontrollerDetails
        name={name}
        id={id}
        description={description}
        imageUrl={imageUrl}
        imageHighlight={imageHighlight}
        disclaimer={disclaimer}
        externalUrl={externalUrl}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const microcontrollerId = context.params?.id;
  const microcontroller: Microcontroller =
    microcontrollers[microcontrollerId as string];

  const name = microcontroller.name;
  const id = microcontroller.id;
  const description = microcontroller.description;
  const imageUrl = microcontroller.imageUrl;
  const imageHighlight = microcontroller.imageHighlight;
  const disclaimer = microcontroller.disclaimer || null;
  const externalUrl = microcontroller.externalUrl || null;
  return {
    props: {
      name,
      id,
      description,
      imageUrl,
      imageHighlight,
      disclaimer,
      externalUrl,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  // eslint-disable-next-line no-unused-vars
  context: GetStaticPathsContext
) => {
  const microcontrollerIds = Object.keys(microcontrollers);
  const ids = microcontrollerIds.map((key: string) => ({
    params: { id: key.toString() },
  }));

  return {
    paths: ids,
    fallback: false,
  };
};

export default Index;
