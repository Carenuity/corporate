export interface YoutubeVideo {
  title: string;
  thumbnail: Thumbnail;
  url: string;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}