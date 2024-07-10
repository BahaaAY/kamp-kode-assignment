const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const messageRoutes = require("./routes/messages");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
