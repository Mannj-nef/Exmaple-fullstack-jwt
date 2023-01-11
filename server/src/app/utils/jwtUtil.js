import jwt from "jsonwebtoken";

export const accessToken = (data) => {
  return jwt.sign(data, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

export const refreshToken = (data) => {
  return jwt.sign(data, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: process.env.EXPIRES_IN_REFRESH,
  });
};

export const verifyToken = (token) => {
  const accessToken = token.split(" ")[1];
  try {
    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);

    return decodedToken;
  } catch (error) {
    console.log(error);
  }
};

export const handleToken = (user) => {
  const dataToken = {
    id: user.id,
    role: user.role,
  };
  const token = accessToken(dataToken);
  const rfToken = refreshToken(dataToken);

  return { token, rfToken };
};
