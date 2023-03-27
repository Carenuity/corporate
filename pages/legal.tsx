import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import BlogLayout from '../components/BlogLayout';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import { LANG_ENGLISH } from '../utils/constants';

const legal = () => {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems Legal Notice'
        />
        <meta name='description' content='Real Estate Electronics Matter' />
        <title>Carenuity</title>
      </Head>
      
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='Legal Notice'
        pageUrl='/legal'
      />

      <BlogLayout lang={LANG_ENGLISH}>
        <div className='wow fadeIn' data-wow-delay='20ms'>
          <h3 className='h4 mb-3 text-primary'>Legal Notice</h3>

          <h5 className='h6 mb-2'>Dispute resolution</h5>
          <p className='mb-4'>
            The European Commission provides a platform for online dispute
            resolution (OS):
            <Link href='https://ec.europa.eu/consumers/odr'>
              https://ec.europa.eu/consumers/odr.
            </Link>
            Please find our email in the impressum/legal notice.
          </p>
          <p className='mb-4'>
            We do not take part in online dispute resolutions at consumer
            arbitration boards.
          </p>

          <h5 className='h6 mb-2'>Liability for Contents</h5>
          <p className='mb-4'>
            As service providers, we are liable for own contents of these
            websites according to Sec. 7, paragraph 1 German Telemedia Act
            (TMG). However, according to Sec. 8 to 10 German Telemedia Act
            (TMG), service providers are not obligated to permanently monitor
            submitted or stored information or to search for evidences that
            indicate illegal activities.
          </p>
          <p className='mb-4'>
            Legal obligations to removing information or to blocking the use of
            information remain unchallenged. In this case, liability is only
            possible at the time of knowledge about a specific violation of law.
            Illegal contents will be removed immediately at the time we get
            knowledge of them.
          </p>

          <h5 className='h6 mb-2'>Liability for Links</h5>
          <p className='mb-4'>
            Our offer includes links to external third party websites. We have
            no influence on the contents of those websites, therefore we cannot
            guarantee for those contents. Providers or administrators of linked
            websites are always responsible for their own contents.
          </p>
          <p className='mb-4'>
            The linked websites had been checked for possible violations of law
            at the time of the establishment of the link. Illegal contents were
            not detected at the time of the linking. A permanent monitoring of
            the contents of linked websites cannot be imposed without reasonable
            indications that there has been a violation of law. Illegal links
            will be removed immediately at the time we get knowledge of them.
          </p>

          <h5 className='h6 mb-2'>Copyright</h5>
          <p className='mb-4'>
            Contents and compilations published on these websites by the
            providers are subject to German copyright laws. Reproduction,
            editing, distribution as well as the use of any kind outside the
            scope of the copyright law require a written permission of the
            author or originator. Downloads and copies of these websites are
            permitted for private use only.
          </p>
          <p className='mb-4'>
            The commercial use of our contents without permission of the
            originator is prohibited.
          </p>
          <p className='mb-4'>
            Copyright laws of third parties are respected as long as the
            contents on these websites do not originate from the provider.
            Contributions of third parties on this site are indicated as such.
            However, if you notice any violations of copyright law, please
            inform us. Such contents will be removed immediately.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}

export default legal