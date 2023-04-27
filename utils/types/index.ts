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
