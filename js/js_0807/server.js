import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoutes.js";

// const cors = require("cors");
// app.use(cors());

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("연결이 되었습니다.");
    app.listen(PORT, () => {
      console.log(`연결이 정상적으로 되었습니다. http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/user", route);
