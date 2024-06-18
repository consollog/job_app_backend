export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    httpOnly: true,
    secure:process.env.NODE_ENV === 'production',
    sameSite: "None" 
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
