import type { NextApiRequest, NextApiResponse } from 'next';
import Blog from '../../../models/blogModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const blog = await Blog.findById(id);
  res.status(200).json(blog);
}
