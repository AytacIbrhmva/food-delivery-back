const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

connectDb();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/restaurants", require("./routes/restaurantRoutes"));
app.use("/api/groups", require("./routes/groupRoutes"));

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
