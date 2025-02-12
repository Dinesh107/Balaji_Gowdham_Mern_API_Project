const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase = require('./config/connectDatabase.jsx')
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product.jsx");
const orders = require("./routes/order.jsx");

connectDatabase(); // Connect to the database

app.use(express.json());
app.use(cors());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening on ${process.env.PORT} Port in ${process.env.NODE_ENV} phase`
  );
});
