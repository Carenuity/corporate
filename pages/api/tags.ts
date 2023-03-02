// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TagInterface } from '../../utils/types/Tag';

type Data = {
  tags: TagInterface[];
};

const tagLinks: TagInterface[] = [
  {
    name: 'Marketing',
    url: '/',
  },
  {
    name: 'Solutions',
    url: '/',
  },
  {
    name: 'App',
    url: '/',
  },
  {
    name: 'Development',
    url: '/',
  },
  {
    name: 'Security',
    url: '/',
  },
  {
    name: 'Design',
    url: '/',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ tags: tagLinks });
}
