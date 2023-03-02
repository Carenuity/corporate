// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PostInterface } from '../../../utils/types/Post';
import { ReviewInterface } from '../../../utils/types/Review';

type Data = {
  comments: ReviewInterface[];
};

const _comments: ReviewInterface[] = [
  {
    id: '1',
    blogId: '1',
    ownerImage: 'Denis Irwin',
    ownerName: 'img/avatars/avatar-01.jpg',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: '2',
    blogId: '1',
    ownerImage: 'Erica Turner',
    ownerName: 'img/avatars/avatar-02.jpg',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: '3',
    blogId: '1',
    ownerImage: 'John Martin',
    ownerName: 'img/avatars/avatar-03.jpg',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const blogId = req.query.id?.toString();
 const blogReviews = _comments.filter(
   (comment: ReviewInterface) => comment.blogId === blogId
 );
  res.status(200).json({ comments: blogReviews });
}
