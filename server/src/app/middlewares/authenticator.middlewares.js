import MESSAGE from "../../configs/message.config.js";
import { verifyToken } from "../utils/jwtUtil.js";

const middlewareAuthen = {};

middlewareAuthen.verifyToken = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    errorStauts(res);
  } else {
    try {
      const user = verifyToken(token);
      if (!user) return errorStauts(res);

      req.user = user;
      next();
    } catch (error) {}
  }
};

function errorStauts(res) {
  return res.status(401).json({
    codeMessage: MESSAGE.NOT_ACCESS,
  });
}

export default middlewareAuthen;
