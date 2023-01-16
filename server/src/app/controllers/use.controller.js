import MESSAGE from "../../configs/message.config.js";
import userMongo from "../models/uer.model.js";
import {
  handleComparePassword,
  handleHashPassword,
} from "../utils/handlePassword.js";
import { accessToken, handleToken, refreshToken } from "../utils/jwtUtil.js";

const useController = {
  // [GET] /api/v1/users/
  getAll: async (req, res) => {
    try {
      const users = await userMongo.find({});
      return res.status(200).json({
        codeMessage: MESSAGE.SUCCESS,
        users,
      });
    } catch (error) {
      res.status(500).json({ codeMessage: MESSAGE.SERVER_ERR });
    }
  },

  // [PORT] /api/v1/users/register
  register: async (req, res) => {
    const user = req.body;
    const { email, password } = user;

    try {
      const userExist = await userMongo.find({ email });
      if (userExist && userExist.length > 0) {
        res.status(200).json({
          codeMessage: MESSAGE.EXISTS_USER,
        });
        return;
      }

      const hashPassword = handleHashPassword(password);
      userMongo.create({
        ...user,
        password: hashPassword,
      });

      return res.status(200).json({
        codeMessage: MESSAGE.SUCCESS,
      });
    } catch (error) {
      res.status(500).json({ codeMessage: MESSAGE.SERVER_ERR });
    }
  },

  // [PORT] /api/v1/users/login
  login: async (req, res) => {
    try {
      const data = req.body;
      const { email, password } = data;

      const user = await userMongo.findOne({ email });
      const pass = user
        ? handleComparePassword(password, user?.password)
        : false;

      if (user && pass) {
        const { token, rfToken } = handleToken(user);
        res.cookie("rfToken", rfToken, { path: "/" });

        delete user._doc.password;
        return res.status(200).json({
          codeMessage: MESSAGE.SUCCESS,
          user,
          token,
        });
      } else if (!user) {
        return res.status(404).json({
          codeMessage: MESSAGE.ACCOUNT_NOT_EXISTS,
        });
      } else if (!pass) {
        return res.status(404).json({
          codeMessage: MESSAGE.WRONG_PASSWORD,
        });
      }
    } catch (error) {
      res.status(500).json({ codeMessage: MESSAGE.SERVER_ERR });
    }
  },

  // [PUT] /api/v1/users/:id
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      await userMongo.findByIdAndUpdate(id, data);
      return res.status(200).json({
        sodeMessage: MESSAGE.UPDATE_SUCCESS,
        data,
      });
    } catch (error) {
      res.status(500).json({ codeMessage: MESSAGE.SERVER_ERR });
    }
  },

  // [DELETE] /api/v1/users/:id
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      // const user = await userMongo.findByIdAndDelete(id)
      return res.status(200).json({
        sodeMessage: MESSAGE.DELETE_SUCCESS,
        // user,
      });
    } catch (error) {
      res.status(500).json({ codeMessage: MESSAGE.SERVER_ERR });
    }
  },
};

export default useController;
