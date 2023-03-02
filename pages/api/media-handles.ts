// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MediaHandleInterface } from '../../utils/types/MediaHandle';

type Data = {
  social_media_handles: MediaHandleInterface[];
};

const socials: MediaHandleInterface[] = [
  {
    icon: 'fab fa-facebook-f',
    url: '/',
  },
  {
    icon: 'fab fa-twitter',
    url: '/',
  },
  {
    icon: 'fab fa-instagram',
    url: '/',
  },
  {
    icon: 'fab fa-linkedin-in',
    url: '/',
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ social_media_handles: socials });
}
