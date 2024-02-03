import { User } from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getUserForSidebar = catchAsync(async (req, res) => {
  const currentUser = req.user._id;

  const allUsers = await User.find({ _id: { $ne: currentUser } }).select(
    '-password'
  );

  res.status(200).json(allUsers);
});
