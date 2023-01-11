import express from "express";
import dotenv from "dotenv";
import mongoURL from "./database/mongooseDb.js";
import useRouter from "./routers/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(express.);

// connect database
mongoURL();

// router
useRouter(app);

app.listen(port, () => {
  console.log(`app listening port: ${port}`);
});
