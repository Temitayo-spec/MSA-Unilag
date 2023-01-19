import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../config/db';
import Blog from '../../../models/blogModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  // get all blogs

  const blogs = await Blog.find();
  res.status(200).json(blogs);
}
