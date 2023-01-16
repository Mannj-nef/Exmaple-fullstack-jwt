import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoURL from "./database/mongooseDb.js";
import useRouter from "./routers/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// connect database
mongoURL();

// router
useRouter(app);

app.listen(port, () => {
  console.log(`app listening port: ${port}`);
});
