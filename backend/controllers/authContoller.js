import { User } from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import bcrypt from 'bcryptjs';
import { loginSchema, signupSchema } from '../validations/userSchema.js';
import generateJwtAndSetCookie from '../utils/generateJwtAndSetCookie.js';

export const signup = catchAsync(async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  // VALIDATE USER INPUT
  const validData = signupSchema.safeParse({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  });

  if (validData.success === false) {
    res.status(400).json({
      message: validData.error.errors.map((error) => error.message).join(', '),
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const user = await User.findOne({ username });

  if (user) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // HASH PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // PROFILE PICTURE
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl/?username=${username}`;

  // CREATE USER
  const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    gender,
    profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
  });

  // JWT TOKEN and COOKIE
  generateJwtAndSetCookie(res, newUser);

  // SAVE USER
  await newUser.save();

  // SEND RESPONSE
  res.status(201).json({ message: 'User registered successfully' });
});

export const login = catchAsync(async (req, res) => {
  const { username, password } = req.body;

  const validData = loginSchema.safeParse({
    username,
    password,
  });

  if (validData.success === false) {
    res.status(400).json({
      message: validData.error.errors.map((error) => error.message).join(', '),
    });
  }

  // FIND USER
  const user = await User.findOne({ username });

  // CHECK IF USER EXISTS
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // CHECK IF PASSWORD IS CORRECT
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // JWT TOKEN and COOKIE
  generateJwtAndSetCookie(res, user);

  // SEND RESPONSE
  res.json({
    message: 'Login successful',
    user: {
      id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    },
  });
});

export const logout = catchAsync(async (req, res) => {
  // CLEAR COOKIE
  res.cookie('jwt', '', {
    httpOnly: true,
    maxAge: 0,
  });

  // SEND RESPONSE
  res.json({ message: 'Logout successful' });
});
