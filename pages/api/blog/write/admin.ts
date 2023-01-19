import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../config/db';
import Blog from '../../../../models/blogModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ err: 'Please fill in all fields' });
  }

  const blog = await Blog.findOne({
    title,
  });

  if (blog) {
    return res.status(400).json({ err: 'Blog already exists' });
  }

  const newBlog = new Blog({
    title,
    content,
    author,
  });

  await newBlog.save();
  res.status(200).json({ msg: 'Blog created successfully' });
}
