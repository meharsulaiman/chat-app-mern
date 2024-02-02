import jwt from 'jsonwebtoken';
import { catchAsync } from '../utils/catchAsync.js';
import { User } from '../models/userModel.js';

export const routeProtector = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'You are not logged in' });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    return res.status(401).json({ message: 'User does not exist' });
  }

  req.user = user;

  next();
});
