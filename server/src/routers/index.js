import jwt from "jsonwebtoken";
import { accessToken, handleToken, verifyToken } from "../app/utils/jwtUtil.js";
import MESSAGE from "../configs/message.config.js";
import userRouter from "./user.router.js";

function useRouter(app) {
  const api = "/api/v1";

  app.use(`${api}/users`, userRouter);

  app.get(`${api}/refreshToken`, (req, res) => {
    const { cookie } = req.headers;
    const tokenRefresh = cookie.split("=")[1];

    if (!tokenRefresh)
      return res.status(401).json({ codeMessage: MESSAGE.NOT_ACCESS });
    try {
      const user = jwt.verify(tokenRefresh, process.env.REFRESH_TOKEN_KEY);

      const { token, rfToken } = handleToken(user);

      res.cookie("rfToken", rfToken, { path: "/" });

      res.status(200).json({ codeMessage: MESSAGE.SUCCESS, token });
    } catch (error) {
      return res.status(500).json({ codeMessage: MESSAGE.SERVER_ERR });
    }
  });

  app.get("*", (req, res) => {
    res.status(400).json({
      codeMessage: MESSAGE.PAGE_NOT_FOUND,
    });
  });
}

export default useRouter;
