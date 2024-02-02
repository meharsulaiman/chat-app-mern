import jwt from 'jsonwebtoken';

const generateJwtAndSetCookie = (res, user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  console.log('expiresIn', process.env.JWT_EXPIRES_IN);

  const cookieOptions = {
    maxAge: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production' ? true : false,
  };

  res.cookie('jwt', token, cookieOptions);
};

export default generateJwtAndSetCookie;
