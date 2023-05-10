import DevAddress from './DevAddress';

const DesignerAddress = () => {
  return (
    <>
      <address>
        WebsiteDesignTemplates:{' '}
        <a
          href='https://themeforest.net/user/websitedesigntemplates'
          target='_blank'
          className='text-white text-primary-hover' rel="noreferrer"
        >
          Profile
        </a>
      </address>
      <DevAddress />
    </>
  );
}

export default DesignerAddress