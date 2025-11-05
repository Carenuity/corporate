import { CompanyInfo, CompanyUrls, Microcontroller, Service } from './types';

export const LANG_ENGLISH = 'en';
export const LANG_GERMANY = 'de';
export const SOLUTIONS_BUILDER_URL = 'https://solutions.carenuity.com';

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
  Sammury: `Carenuity provides modular and highly customizable sensor solutions for monitoring vital signs and real estate air quality. Premium and popular is the SQ-Panel, delivering peace-in-mind by 24/7 vital and environmental sensing & care inside one device, so that you can see what no one else will see.`,
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
  supplimentAiMaterials: 'https://www.youtube.com/@AshutoshTripathi_AI/videos',
  benefitsVideo: '/benefits',
  auth: `https://carenuity.auth.eu-central-1.amazoncognito.com/login?client_id=1c1tm67sd25m138f8ccllrdofe&scope=openid&response_type=code&redirect_uri=https%3A%2F%2Fsolutions.carenuity.com`, // 'https://sq-panel.vercel.app/login',
  logos: ['/img/logos/logo.svg', '/img/logos/logo-inner.png'],
  banner: '/img/banner.jpg',
};

export const servicesUrls: Service = {
  standard: [
    {
      name: 'C3-Mini™ Applications',
      url: '/c3-mini',
      icon: 'fas fa-code',
      type: 'icon',
    },
    {
      name: 'AI Assisted Solutions ',
      url: '/ai-assisted-devices',
      icon: 'fa-solid fa-brain',
      type: 'icon',
    },
    {
      name: 'All-for-One Sensor Boxes',
      url: '/single-sensor-boxes',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'C3-Mini™ Sensor Selection Box',
      url: '/c3-mini-box',
      icon: 'fa-solid fa-keyboard',
      type: 'icon',
    },
  ],
  premium: [
    {
      name: 'SQ-Panel Sensor Display',
      url: '/sq-panel',
      icon: '/img/content/menu/sensor-display.png', // 'fa-solid fa-gauge',
      type: 'image',
    },
    {
      name: 'SQ-Connector Matter',
      url: '/sq-connector',
      icon: '/img/content/menu/connector-matter.png', // 'fa-solid fa-plug',
      type: 'image',
    },
    {
      name: 'SQ-Power Supply',
      url: '/sq-power',
      icon: 'fa-solid fa-plug',
      type: 'icon',
    },
    {
      name: 'SQ-TableStand',
      url: '/sq-tablestand',
      icon: '/img/content/menu/table-stand.png',
      type: 'image',
    },
    {
      name: 'Feature Evaluation',
      url: '/evaluate-at-home',
      icon: 'fa-solid fa-house',
      type: 'icon',
    },
  ],

  products: [
    {
      name: 'Autonomous Driving Car',
      url: '/product/autonomous-driving-car',
      icon: 'fas fa-code',
      type: 'icon',
    },
    {
      name: 'AquaBar ',
      url: '/product/aquabar',
      icon: 'fa-solid fa-brain',
      type: 'icon',
    },
    {
      name: 'C3 Mini PiggyBack',
      url: '/product/c3-mini-piggybacks',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'C3 Mini Triple',
      url: '/product/c3-mini-triple',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'C3-Mini:Bluetooth Beacon',
      url: '/product/c3-mini-bluetooth-beacon',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'DingDongBar',
      url: '/product/dingdongbar',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'DinoShrek',
      url: '/product/dinoshrek',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'Envirosence 680',
      url: '/product/envirosence-680',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'FreshCheck',
      url: '/product/freshcheck',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'FridgeBar',
      url: '/product/fridgebar',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'Leaf Temperature Measurement',
      url: '/product/leaf-temperature-measurement',
      icon: 'fas fa-box',
      type: 'icon',
    },

    {
      name: 'PlantBar',
      url: '/product/plantbar',
      icon: 'fas fa-box',
      type: 'icon',
    },
    {
      name: 'Sensor Array',
      url: '/product/sensor-array',
      icon: 'fas fa-box',
      type: 'icon',
    },
  ],

  helpcenter: [
    {
      name: 'User Help Center',
      url: '/help-center',
      icon: 'fas fa-code',
      type: 'icon',
    },
    {
      name: 'Developer Help Center',
      url: '/developer-help-center',
      icon: 'fa-solid fa-brain',
      type: 'icon',
    },
  ],

  business: [
    {
      name: 'Smartphone SQ-App',
      url: '/carenuity-app-guide',
      icon: 'fas fa-microchip',
      type: 'icon',
    },
    {
      name: 'Solution Builder', //  for new businesses
      url: SOLUTIONS_BUILDER_URL,
      icon: 'fas fa-store',
      type: 'icon',
    },
    {
      name: 'WebShop',
      url: 'http://carenuity.shop',
      icon: 'fa-solid fa-shopping-cart',
      type: 'icon',
    },
    {
      name: 'Home Challenge',
      url: '/home-challenge',
      icon: 'fa-solid fa-star',
      type: 'icon',
    },
  ],
};

export const navigationBannerUrls: string[] = [
  '/img/banner/BUDGET-Products.webp',
  '/img/banner/PREMIUM-Products.webp',
  '/img/banner/BUSINESS-Products.webp',
];

export const microcontrollers: any = {
  'C3-Mini': {
    id: 'C3-Mini',
    name: 'C3-Mini',
    description: `For flashing C3-Mini successfully, you need to hold the BOOT-Button, click in parallel the RST-Button for a moment while still keeping BOOT button pressed and then start WebFlashing. Once Flashing started you can release the BOOT-Button. 
    Whenever you want to quick change a sensor, do the same procedure.

    We know this is tedious, compared to old ESP8266 / ESP32  boards. Therefore we work on convenience measures against it.`,
    imageUrl: '/img/content/C3-Mini-microcontroller.webp',
    imageHighlight:
      'The ESP32-Mini was the successor of the D1-Mini, comes with added Bluetooth and is now the predecessor of the latest C3-Mini™, which we recommend to stay future proof with respect to the upcoming Matter standard.',
    disclaimer:
      'ChipGlobe, Carenuity and C3-Mini are trademarks of ChipGlobe GmbH',
  } as Microcontroller,
  'D1-Mini': {
    id: 'D1-Mini',
    name: 'D1-Mini',
    description:
      "The D1-Mini is the most popular. Nevertheless it lacks from having Bluetooth. We continue to support D1-Mini as it simply is the cheapest for making use of any Carenuity's Install-for-Free applications",
    imageUrl: '/img/content/D1-Mini-microcontroller.webp',
    imageHighlight:
      'The D1-Mini predecessor of the C3-Mini™, which we recommend to stay future proof with respect to the upcoming Matter standard. The D1-Mini has the same size, pin-out and footprint like the C3-Mini™, but misses bluetooth.',
    disclaimer:
      'ChipGlobe, Carenuity and C3-Mini are trademarks of ChipGlobe GmbH',
    externalUrl: 'https://www.chipglobe.shop/c/iot-systeme/d1-c3-mini-shield',
  } as Microcontroller,
  'ESP32-CAM': {
    id: 'ESP32-CAM',
    name: 'ESP32-CAM',
    description:
      'For introducing the ESP32-CAM into our Carenuity portfolio, we are preparing this application, which you can preview here:',
    imageUrl: '/img/content/ESP32-CAM-microcontroller.webp',
    imageHighlight:
      'The ESP32-CAM is a very popular camera in the attractive low-cost segment. A huge variety of applications become possible, once combined with all the sensors.',
    disclaimer:
      'All these images and texts are from https://randomnerdtutorials.com , a great source for projects. The Randomnerdtutorials.com are independent and not affiliated to Carenuity.com.',
    externalUrl:
      'https://randomnerdtutorials.com/esp32-cam-shield-pcb-telegram',
  } as Microcontroller,
  'ESP32-Mini': {
    id: 'ESP32-Mini',
    name: 'ESP32-Mini',
    description:
      'For staying backward compatible with kits inside the ChipGlobe Shop, we continue to support the ESP32-Mini Microcontroller',
    imageUrl: '/img/content/ESP32-Mini-microcontroller.webp',
    imageHighlight:
      'The ESP32-Mini was the successor of the D1-Mini, comes with added Bluetooth and is now the predecessor of the latest C3-Mini™, which we recommend to stay future proof with respect to the upcoming Matter standard.',
    disclaimer:
      'All these images and texts are from https://www.infineon.com/cms/en/tools/landing/infineon-for-makers/diy-projects, a good source for DIY projects with Infineon sensors. The Infineon pages are independent and not affiliated to Carenuity.com.',
    externalUrl:
      'https://www.infineon.com/cms/en/product/promopages/dual-sensor-box/',
  } as Microcontroller,
  'RPi-Pico-W': {
    id: 'RPi-Pico-W',
    name: 'RPi Pico W',
    description:
      'For introducing the Raspberry Pi Pico W  into our Carenuity portfolio, we are preparing to support the ESPHome integration of Home Assistant.',
    imageUrl: '/img/content/Pico-W-microcontroller.webp',
    imageHighlight:
      'The RPi Pico W comes with Wifi from Infineon Technologies AG and is supported by ESPHome inside Home Assistant. Perfect reasons to combine it with all the sensors.',
    disclaimer:
      'All these images and texts are from https://home-assistant-guide.com, the source for Home Assistant. The https://home-assistant-guide.com is independent and not affiliated to Carenuity.com.',
    externalUrl:
      'https://home-assistant-guide.com/changelog/esphome/esphome-2022-11-0/esphome-supports-the-raspberry-pi-pico-w-rp2040/',
  } as Microcontroller,
};

export const NewsletterHostname =
  'https://newsletter-test-dot-solution-builder-421307.ew.r.appspot.com';

export const targetDomain = 'https://carenuity.com'; // https://carenuity.netlify.app
