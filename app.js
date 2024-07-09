const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./util/firebase");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const rootDir = require("./util/path");

const messageRoutes = require("./routes/messages");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
