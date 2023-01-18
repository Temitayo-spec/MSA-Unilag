import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../config/db';
import User from '../../../../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getToken = (user: { _id: any; name: any; isAdmin: any }) => {
  return jwt.sign(
    {
      id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
    },
    process.env.NEXT_PUBLIC_JWT_SECRET || ''
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  // login admin
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ err: 'Please fill in all fields' });
  }

  const user = await User.findOne({
    name,
  });

  if (!user) {
    return res.status(400).json({
      err: 'User does not exist',
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      err: 'Incorrect password',
    });
  }

  const token = getToken(user);

  res.status(200).json({
    token,
    user: {
      id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
    },
  });
}
