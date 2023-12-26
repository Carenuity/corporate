import Head from 'next/head';
import dynamic from 'next/dynamic';
import PageSpinner from '../components/PageSpinner';

const Impressum = dynamic(() => import('../components/dynamic/Impressum'), {
  ssr: false,
  loading: () => <PageSpinner />,
});

const impressum = () => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems Impressum"
        />
        <meta
          name="description"
          content="Carenuity ChipGlobe Electronics Embedded Systems Legal Notice"
        />
        <title>Impressum</title>
      </Head>

      <Impressum />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//  const server = process.env.DOMAIN;

//  const postsRes = await fetch(`${server}/api/posts/`, {
//    next: { revalidate: 60 },
//  });
//  const postsData = await postsRes.json();

//  const mediaRes = await fetch(`${server}/api/media-handles/`, {
//    next: { revalidate: 60 },
//  });
//  const mediaData = await mediaRes.json();

//   return {
//     props: {
//       posts: postsData.posts,
//       mediaLinks: mediaData.social_media_handles,
//     },
//   };
// };

export default impressum;
