const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const database = require("./db");

const userRouter = require("./routes/user");
const productRouter = require("./routes/Addproductroute");
const brandRouter = require("./routes/AddBrand");
const ratingRouter = require("./routes/Rating");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);
app.use(productRouter);
app.use(brandRouter);
app.use(ratingRouter);

app.use("/payment", require("./routes/payment"));
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
