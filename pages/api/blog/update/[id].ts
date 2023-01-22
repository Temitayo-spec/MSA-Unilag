import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../config/db';
import Blog from '../../../../models/blogModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const blog = await Blog.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json(blog);
}
