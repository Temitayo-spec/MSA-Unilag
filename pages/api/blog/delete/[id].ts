import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../config/db';
import Blog from '../../../../models/blogModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  // delete a blog
  
  const blog = await Blog.findByIdAndDelete(req.query.id);
  res.status(200).json(blog);
}
