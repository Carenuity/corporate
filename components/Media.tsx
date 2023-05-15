import { useContext } from 'react'
import { StoreContext } from './context/Store';

const Media = () => {
 const {state} = useContext(StoreContext);
  return (
    <>
      <div className='widget bg-secondary wow fadeIn' data-wow-delay='600ms'>
        <div className='widget-content'>
          <h5 className='mb-4 text-white'>Follow Us</h5>
          <ul className='social-icon-style2 list-unstyled ps-0'>
            <li>
              <a href={state.urls.socialMediaHandles.facebook}>
                <i className='fab fa-facebook-f'></i>
              </a>
            </li>
            <li>
              <a href={state.urls.socialMediaHandles.twitter}>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href={state.urls.socialMediaHandles.instagram}>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href={state.urls.socialMediaHandles.linkedIn}>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
            <li>
              <a href={state.urls.socialMediaHandles.youTube}>
                <i className='fab fa-youtube'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Media