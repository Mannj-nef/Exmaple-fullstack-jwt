import MESSAGE from "../../configs/message.config.js";
import { verifyToken as verify } from "../utils/jwtUtil.js";
import { ROLE } from "../../enums.js";

const middlewareAuthor = {};

middlewareAuthor.verifyToken = (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.token;
  if (!token) {
    errorStatus(res);
  } else {
    try {
      const user = verify(token);

      if (!user) return errorStatus(res);

      if (user.id === id || user.role === ROLE.ADMIN) {
        next();
      } else {
        return errorStatus(res);
      }
    } catch (error) {
      errorStatus(res);
    }
  }
};

function errorStatus(res) {
  res.status(401).json({
    codeMessage: MESSAGE.NOT_ACCESS,
  });
}

export default middlewareAuthor;
