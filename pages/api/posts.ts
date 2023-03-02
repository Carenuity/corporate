// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PostInterface } from '../../utils/types/Post';

type Data = {
  posts: PostInterface[];
};

const _posts: PostInterface[] = [
  {
    title: 'Define world best IT solution technology.',
    image: 'img/blog/blog-thumb-01.jpg',
    url: '/',
    date: 'June 01 2022',
  },
  {
    title: '5 easy ways to improve your web security.',
    image: 'img/blog/blog-thumb-02.jpg',
    url: '/',
    date: 'May 28 2022',
  },
  {
    title: 'How to create awesome web design.',
    image: 'img/blog/blog-thumb-03.jpg',
    url: '/',
    date: 'May 24 2022',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ posts: _posts });
}
