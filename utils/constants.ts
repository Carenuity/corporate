import { CompanyInfo, CompanyUrls, Service } from './types';

export const LANG_ENGLISH = 'en';
export const LANG_GERMANY = 'de';

export const StoreReducerType = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

export const carenuity: CompanyInfo = {
  address: ['Chipglobe GmbH', 'Cincinnatistr. 60', '81549 Munich'],
  phone: '(+49) 89-1222469-40',
  email: 'info@carenuity.com',
  slogan: `Real Estate Electronics Matter`,
  Sammury: `We're delivering peace-in-mind by vital and environmental sensing and care that you see what no one else will see.`,
  mission: `Our Mission is to provide all young and caregiving people with especially easy-to-use sensor-systems that allow them to monitor vital signs and indoor air quality parameters for their elderly family members and to select and recommend best suited sensors-systems for their safety and care.`,
  vision: `Our vision is to empower young and caregiving people with innovative and accessible technology solutions that enhance the safety, comfort, and well-being of elderly individuals, enabling them to age in place with dignity, privacy and independence.`,
  visionDescription: `This vision emphasizes the company's commitment to providing technology solutions that are both innovative and accessible, addressing the needs of both the elderly individuals and their caregivers. It also highlights the importance of promoting independence, privacy and dignity in aging, while recognizing the role that technology can play in supporting these goals.`,
};

export const urls: CompanyUrls = {
  socialMediaHandles: {
    facebook: 'https://www.facebook.com/C3.Mini',
    linkedIn: 'https://www.linkedin.com/company/carenuity/',
    twitter: 'https://twitter.com/search?q=c3-mini',
    instagram: 'https://www.instagram.com/carenuity',
    youTube: 'https://www.youtube.com/@carenuity',
  },
  shop: 'https://www.chipglobe.shop/en',
  webFlash: 'https://chipglobe-dev.web.app/',
  benefitsVideo: 'https://www.youtube.com/watch?v=i3pwQ2BWTO8',
  auth: 'https://carenuity-customer-app-dot-roomsensorgcp01.ey.r.appspot.com/auth',
  logos: ['/img/logos/logo.svg', '/img/logos/logo-inner.png'],
  banner: '/img/banner.jpg',
};

export const servicesUrls: Service = {
  standard: [
    {
      name: 'C3-Mini™ Sensor Box​',
      url: '/c3-mini-box',
      icon: 'fa-solid fa-keyboard',
    },
    // {
    //   name: 'WebFlashing',
    //   url: urls.webFlash,
    //   icon: 'fas fa-code',
    // },
    {
      name: 'C3-Mini™ Weather-Panel (launch 2nd H.2023)',
      url: '/c3-mini-weather-panel',
      icon: 'fa-solid fa-cloud',
    },
  ],
  premium: [
    {
      name: 'SQ-Panel (launch 2024)',
      url: '',
      icon: 'fa-solid fa-gauge',
    },
    {
      name: 'SQ-Power Supply (launch 1st H.2023)',
      url: '',
      icon: 'fa-solid fa-plug',
    },
  ],
  business: [
    {
      name: 'SQ-APP (launch 2024)',
      url: '',
      icon: 'fas fa-microchip',
    },
    {
      name: 'SQ-Multi-Home & Office value adder (launch 2025)',
      url: '',
      icon: 'fas fa-building',
    },
  ],
};

export const navigationBannerUrls: string[] = [
  '/img/banner/BUDGET-Products.png',
  '/img/banner/PREMIUM-Products.png',
  '/img/banner/BUSINESS-Products.png',
];