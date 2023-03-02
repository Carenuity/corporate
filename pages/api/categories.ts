// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { CategoryLinkInterface } from '../../utils/types/CategoryLink';

type Data = {
  categories: CategoryLinkInterface[];
};

const categoryLinks: CategoryLinkInterface[] = [
  {
    name: 'IT Management',
    url: '/',
  },
  {
    name: 'Technology',
    url: '/',
  },
  {
    name: 'UI/UX Design',
    url: '/',
  },
  {
    name: 'Digital Marketing',
    url: '/',
  },
  {
    name: 'SEO Implements',
    url: '/',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ categories: categoryLinks });
}
