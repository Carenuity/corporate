// export interface YoutubeVideo {
//   title: string;
//   thumbnail: Thumbnail;
//   url: string;
// }

// interface Thumbnail {
//   url: string;
//   width: number;
//   height: number;
// }

export interface CompanyInfo {
  address: string[];
  Sammury: string;
  mission: string;
  vision: string;
  visionDescription: string;
  slogan: string;
  email: string;
  phone: string;
}

export interface SocialMedia {
  facebook: string;
  linkedIn: string;
  twitter: string;
  youTube: string;
  instagram: string;
}

export interface CompanyUrls {
  socialMediaHandles: SocialMedia;
  shop: string;
  webFlash: string;
  supplimentAiMaterials: string;
  benefitsVideo: string;
  auth: string;
  logos: string[];
  banner: string;
}

export interface StoreState {
  companyInfo: CompanyInfo;
  urls: CompanyUrls;
}

export interface StoreAction {
  type: string;
}

export interface StoreReducerObject {
  state: StoreState;
  dispatch: Function;
}

export interface ServiceUrl {
  name: string;
  url: string;
  icon: string;
}

export interface Service {
  standard: ServiceUrl[];
  premium: ServiceUrl[];
  business: ServiceUrl[];
  // benefits: ServiceUrl[];
}

export interface Microcontroller {
  name: string;
  id: string;
  description: string;
  imageUrl: string;
  imageHighlight: string;
  disclaimer?: string;
  externalUrl?: string;
}
