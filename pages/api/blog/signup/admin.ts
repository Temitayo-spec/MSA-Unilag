import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../config/db';
import User from '../../../../models/userModel';
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ err: 'Please fill in all fields' });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ err: 'Password must be at least 6 characters' });
  }

  const user = await User.findOne({
    name,
  });

  if (user) {
    return res.status(400).json({ err: 'User already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    password: passwordHash,
    isAdmin: true,
  });

  await newUser.save();
}
